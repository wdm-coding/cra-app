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
    <div className="w-full pt-[72px]">
      <div track-site-search="true" data-search-cat="data-product" search-input="#searchBox1">
        <input type="text" placeholder="请输入关键字1" />
      </div>
      <div track-site-search="true" data-search-cat="data-product" search-input="#searchBox2">
        <input type="text" placeholder="请输入关键字2" />
      </div>
      <button type="button">查询</button>
      <div
        onClick={() =>
          (window as any)?.WebAnalytics?.trackSiteSearch({
            keyword: 'test',
            searchCat: 'data-product'
          })
        }
      >
        click
      </div>
      {/* <HomeSwiper onScrollDown={handleScrollDown} />
      <div className="w-full" ref={contentRef}>
        <ThreeServes />
        <Resource />
        <AbilityCenter />
      </div> */}
    </div>
  )
}

export default FnodePortalHome
