import { List } from 'antd'
import styles from './index.less'
import classnames from 'classnames'
import { useState } from 'react'
const AppScenarios = () => {
  const [current, setCurrent] = useState(0)
  const list = [
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    },
    {
      title: '医疗医保',
      icon: 'ylyb.png',
      desc: '汇聚诊疗、医保支付、药械与监管数据，打造可信可用的高质量数据集与服务接口，支撑精算分析、风险识别、费用治理与分级诊疗协同，提升医疗保障治理效能与服务体验。',
      background: '/public/imgs/hainan/ylyb.png'
    }
  ]
  const onClickItem = (index: number) => {
    // 点击哪一个，哪一个滚动到中间
    setCurrent(index)
    const dom = document.querySelector(`.listItem-${index}`)
    if (dom) {
      dom.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // 垂直方向：定位到最近的元素边界
        inline: 'nearest' // 水平方向：定位到最近的元素边界
      })
    }
  }
  return (
    <div className={styles.appScenarios}>
      <div className="text-center p-[30px]">
        <p
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: '#000',
            lineHeight: '60px'
          }}
        >
          应用场景
        </p>
        <p
          style={{
            fontSize: 18,
            color: 'rgba(0,0,0,.45)'
          }}
        >
          APPLICATION SCENARIO
        </p>
      </div>
      <div className={classnames('w-[1380px]', styles.scenariosWrap)}>
        <div className={styles.scenariosLeft}>
          {list.map((item, index) => {
            return (
              <div
                className={classnames(styles.listItem, {
                  [`listItem-${index}`]: true,
                  [styles.active]: current === index
                })}
                key={index}
                onClick={() => onClickItem(index)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className={styles.scenariosRight}>scenariosRight</div>
      </div>
    </div>
  )
}

export default AppScenarios
