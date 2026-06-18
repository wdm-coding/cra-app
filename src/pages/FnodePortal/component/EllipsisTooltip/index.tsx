import { Tooltip } from 'antd'
import { useEffect, useRef, useState, ReactNode } from 'react'
import styles from './index.module.less'
const EllipsisTooltip = ({ title, style }: { title: string, style?: React.CSSProperties }) => {
  const titleRef = useRef<HTMLDivElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  useEffect(() => {
    const element = titleRef.current
    if (element) {
      setIsOverflow(element.scrollWidth > element.clientWidth)
    }
  }, [title]) // 当数据源变化时重新计算
  return (
    <>
      {isOverflow ? (
        <Tooltip title={title}>
          <div className={styles.ellipsisTooltipWrapper} ref={titleRef} style={style}>
            {title}
          </div>
        </Tooltip>
      ) : (
        <div className={styles.ellipsisTooltipWrapper} ref={titleRef} style={style}>
          {title}
        </div>
      )}
    </>
  )
}
export default EllipsisTooltip
