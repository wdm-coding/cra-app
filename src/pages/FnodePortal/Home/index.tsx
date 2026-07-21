/* eslint-disable react/jsx-sort-props */
import { useRef } from 'react'
import HomeSwiper from './component/HomeSwiper'
import ThreeServes from './component/ThreeServes'
import Resource from './component/Resource'
import AbilityCenter from './component/AbilityCenter'

const FnodePortalHome = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const handleScrollDown = () => {
    if (contentRef.current) {
      const scrollDistance = window.innerHeight
      window.scrollBy({
        top: scrollDistance - 72, // 向下滚动的距离
        left: 0, // 水平方向不滚动
        behavior: 'smooth' // 关键：开启平滑过渡动画
      })
    }
  }
  return (
    <div className="w-full">
      <HomeSwiper onScrollDown={handleScrollDown} />
      <div className="w-full" ref={contentRef}>
        <ThreeServes />
        <Resource />
        <AbilityCenter />
      </div>
    </div>
  )
}

export default FnodePortalHome
