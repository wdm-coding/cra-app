import React, { useState, useEffect, useRef, useCallback } from 'react'
import './index.css'

interface HiddenScrollbarProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  autoHide?: boolean // 是否自动隐藏
  hideDelay?: number // 隐藏延迟（毫秒）
  scrollbarColor?: string // 滚动条颜色
  scrollbarHoverColor?: string // 悬停时颜色
  scrollbarWidth?: number // 滚动条宽度
  alwaysShowTrack?: boolean // 是否始终显示轨道
}

const ScrollBar: React.FC<HiddenScrollbarProps> = ({
  children,
  className = '',
  style = {},
  autoHide = true,
  hideDelay = 1000,
  scrollbarColor = 'rgba(0, 0, 0, 0.3)',
  scrollbarHoverColor = 'rgba(0, 0, 0, 0.5)',
  scrollbarWidth = 8,
  alwaysShowTrack = false
}) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [showScrollbar, setShowScrollbar] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout>(null)

  // 更新滚动条位置和可见性
  const updateScrollbar = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current

    setScrollTop(scrollTop)
    setScrollHeight(scrollHeight)
    setClientHeight(clientHeight)

    // 只有在内容超出容器高度时才显示滚动条
    const shouldShow = scrollHeight > clientHeight
    setShowScrollbar(shouldShow)
  }, [])

  // 处理滚动事件
  const handleScroll = useCallback(() => {
    updateScrollbar()
    setIsScrolling(true)
    setShowScrollbar(true)

    // 清除之前的定时器
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }

    // 设置新的隐藏定时器
    if (autoHide) {
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)

        hideTimeoutRef.current = setTimeout(() => {
          if (!isHovering) {
            setShowScrollbar(false)
          }
        }, hideDelay)
      }, 150)
    }
  }, [autoHide, hideDelay, isHovering, updateScrollbar])

  // 处理鼠标悬停
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
    if (scrollHeight > clientHeight) {
      setShowScrollbar(true)
    }
  }, [clientHeight, scrollHeight])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    if (!isScrolling && autoHide) {
      setTimeout(() => {
        if (!isScrolling) {
          setShowScrollbar(false)
        }
      }, 300)
    }
  }, [autoHide, isScrolling])

  // 处理滚动条拖拽
  const handleThumbMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const startY = e.clientY
      const startScrollTop = scrollTop
      const thumbHeight = (clientHeight / scrollHeight) * clientHeight
      const trackHeight = clientHeight - thumbHeight

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaY = moveEvent.clientY - startY
        const newScrollTop = startScrollTop + (deltaY / trackHeight) * scrollHeight

        if (containerRef.current) {
          containerRef.current.scrollTop = Math.max(0, Math.min(newScrollTop, scrollHeight - clientHeight))
        }
      }

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    },
    [clientHeight, scrollHeight, scrollTop]
  )

  // 点击轨道跳转
  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return

      const trackRect = e.currentTarget.getBoundingClientRect()
      const clickY = e.clientY - trackRect.top
      const thumbHeight = (clientHeight / scrollHeight) * clientHeight
      const newScrollTop = (clickY / (clientHeight - thumbHeight)) * (scrollHeight - clientHeight)

      containerRef.current.scrollTop = newScrollTop
    },
    [clientHeight, scrollHeight]
  )

  // 初始化
  useEffect(() => {
    updateScrollbar()

    const resizeObserver = new ResizeObserver(() => {
      updateScrollbar()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    return () => {
      resizeObserver.disconnect()
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [updateScrollbar])

  // 计算滚动条位置和尺寸
  const thumbHeight = scrollHeight === 0 ? 0 : Math.max((clientHeight / scrollHeight) * clientHeight, 20)
  const thumbPosition =
    scrollHeight - clientHeight === 0 ? 0 : (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - thumbHeight)

  return (
    <div
      className={`hidden-scrollbar-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* 内容区域 */}
      <div
        className="hidden-scrollbar-content"
        onScroll={handleScroll}
        ref={containerRef}
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'scroll',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div ref={contentRef} style={{ width: '100%', minHeight: 0, flex: 1 }}>
          {children}
        </div>
      </div>

      {/* 自定义滚动条轨道 */}
      {(showScrollbar || alwaysShowTrack) && (
        <div
          className="hidden-scrollbar-track"
          onClick={handleTrackClick}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: scrollbarWidth + 2,
            height: '100%',
            backgroundColor: alwaysShowTrack ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
            transition: 'all 0.02s ease',
            cursor: 'pointer',
            opacity: showScrollbar ? 1 : 0,
            borderRadius: scrollbarWidth / 1.2
          }}
        >
          {/* 滚动条滑块 */}
          <div
            className="hidden-scrollbar-thumb"
            onMouseDown={handleThumbMouseDown}
            style={{
              position: 'absolute',
              top: thumbPosition,
              right: 2,
              width: scrollbarWidth,
              height: thumbHeight,
              backgroundColor: isHovering || isScrolling ? scrollbarHoverColor : scrollbarColor,
              borderRadius: scrollbarWidth / 2,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, height 0.2s ease'
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ScrollBar
