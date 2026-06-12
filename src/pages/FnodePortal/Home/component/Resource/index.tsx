import { useEffect, useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
const Resource = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const list = [
    {
      title: '已注册用户量',
      num: 665,
      icon: require('@/assets/images/portalImg/resource-icon1.png')
    },
    {
      title: '已注册业务节点',
      num: 8,
      icon: require('@/assets/images/portalImg/resource-icon2.png')
    },
    {
      title: '已登记数据量',
      num: 113384,
      icon: require('@/assets/images/portalImg/resource-icon3.png')
    }
  ]
  // 循环改变activeIndex
  const handleClick = (index: number) => {
    setActiveIndex(index)
  }
  const [isIndterval, setIsIndterval] = useState(true)
  useEffect(() => {
    let timer: any = null
    if(isIndterval){
      timer = setInterval(() => {
        handleClick(activeIndex === list.length - 1 ? 0 : activeIndex + 1)
      }, 1000)
    }
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    }
  }, [activeIndex, list.length, isIndterval])
  return (
    <div className={styles.resource}>
      <div style={{ textAlign: 'center', marginBottom: '8.52vh' }}>
        <span style={{ fontSize: '2.08vw', color: '#000', fontFamily: 'SHS-M' }}>资源概览</span>
      </div>
      <div className={styles.resourceContent}>
        {list.map((item, index) => (
          <div
            className={classNames(styles.resourceItem, {
              [styles.resourceItemActive]: index === activeIndex
            })}
            key={index}
            onMouseEnter={() => {
              setIsIndterval(false)
              handleClick(index)
            }}
            onMouseLeave={() =>{
              setIsIndterval(true)
            }}
          >
            <img alt="icon" className={styles.resourceItemIcon} src={item.icon} />
            <div className={styles.resourceItemText}>
              <div className={styles.resourceItemNum}>{item.num}</div>
              <div className={styles.resourceItemTitle}>{item.title}</div>
            </div>
            <div className={styles.resourceItemDetail}>
              resourceItemDetail
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Resource
