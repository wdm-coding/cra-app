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
      background: '/imgs/hainan/ylyb.png'
    },
    {
      title: '民生康养',
      icon: 'msky.png',
      desc: '贯通民政、卫健、医保、残联等关键数据链路，构建全生命周期民生服务数据底座，形成需求识别、资源统筹、服务评估闭环能力，推动公共服务精准供给与兜底保障更高效。',
      background: '/imgs/hainan/msky.png'
    },
    {
      title: '网络安全',
      icon: 'wlaq.png',
      desc: '整合安全日志、资产台账、漏洞风险与威胁情报数据，形成态势感知、预警研判、联动处置与审计取证能力闭环，支撑关键信息基础设施防护与数据安全治理体系化升级。',
      background: '/imgs/hainan/wlaq.png'
    },
    {
      title: '智慧交通',
      icon: 'zhjt.png',
      desc: '融合路网运行、客货运输、停车枢纽与气象数据，构建交通运行画像与预测能力，支撑指挥调度、拥堵治理、运力优化与应急保障协同，实现交通治理从经验驱动向数据驱动转型。',
      background: '/imgs/hainan/zhjt.png'
    },
    {
      title: '企业治理',
      icon: 'qyzl.png',
      desc: '联通工商、税务、信用、能耗与经营行为数据，构建企业全景画像与风险图谱，提供合规评估、监管洞察、融资增信与产业扶持数据产品，提升治理精细化与服务精准度。',
      background: '/imgs/hainan/qyzl.png'
    },
    {
      title: ' 产业图谱',
      icon: 'cytp.png',
      desc: '沉淀企业、项目、园区、供应链与技术创新数据，构建产业链图谱与关键指标体系，支撑招商引资、链主培育、补链强链与风险监测，推动产业决策从“点判断”走向“链研判”。',
      background: '/imgs/hainan/cytp.png'
    },
    {
      title: ' 数字农业',
      icon: 'szny.png',
      desc: '融合耕地、农情、气象、水肥、农机与产销价格数据，建设农业数据工厂与模型能力，支撑灾害预警、产量评估、精准种养与质量溯源，实现农业生产与经营的可视可控可预测。',
      background: '/imgs/hainan/szny.png'
    },
    {
      title: '智慧园区',
      icon: 'zhyq.png',
      desc: '汇聚园区招商、企业服务、能耗、安防、环保与运营数据，打造园区“一张图”与数字运营底座，支撑能耗优化、风险管控、企业画像与精准服务，提升园区治理效率与运营价值。',
      background: '/imgs/hainan/zhyq.png'
    },
    {
      title: '地理空间',
      icon: 'dlkj.png',
      desc: '构建统一时空数据底座，整合遥感、测绘、三维实景与行业专题数据，形成可复用的空间数据资产与服务能力，支撑规划建设、资源治理、应急指挥与重大工程全周期管理。',
      background: '/imgs/hainan/dlkj.png'
    },
    {
      title: '社会用工',
      icon: 'shyg.png',
      desc: '贯通招聘用工、社保、培训与劳动监察数据，构建人岗匹配与供需监测体系，支撑稳岗扩岗、欠薪治理、灵活用工服务与技能提升决策，实现就业服务与监管治理同向发力。',
      background: '/imgs/hainan/shyg.png'
    }
  ]
  const onClickItem = (index: number) => {
    setCurrent(index)
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
                <img
                  alt={item.icon}
                  src={require(`@/assets/images/client/${item.icon}`)}
                  style={{ width: 48, height: 48, marginRight: 25 }}
                />
                {item.title}
              </div>
            )
          })}
        </div>
        <div
          className={styles.scenariosRight}
          style={{
            backgroundImage: `url(${list[current].background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div
            style={{
              color: '#666',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: '30px',
              marginBottom: '75px'
            }}
          >
            {list[current].title}
          </div>
          <div>{list[current].desc}</div>
        </div>
      </div>
    </div>
  )
}

export default AppScenarios
