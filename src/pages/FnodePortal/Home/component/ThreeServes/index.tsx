import styles from './index.module.less'
const ThreeServes:React.FC = () => {
  const list = [
    {
      icon:require('@/assets/images/portalImg/threeServer-icon1.png'),
      title:'统一目录登记',
      desc:'区域功能节点统一管理并颁发数据资源和产品唯一标识并上报给全域功能节点，依托统一目录实现跨系统、跨区域提供数据目录公共服务。'
    },
    {
      icon:require('@/assets/images/portalImg/threeServer-icon2.png'),
      title:'统一身份标识',
      desc:'对接入基础设施的系统、主体提供统一的身份注册能力，颁发身份标识码和身份凭证，并提供身份统一验证方式和权威验证源，保证接入主体、接入连接器及平台的身份可信。'
    },
    {
      icon:require('@/assets/images/portalImg/threeServer-icon3.png'),
      title:'统一接口要求',
      desc:'构建“协议统一、服务集成、安全可信、动态治理”全域接口体系，通过标准化接口协议统一数据格式、通信规范及状态码，确保甘肃区域节点与其他区域节点、行业节点的数据交互“无壁垒”。'
    }
  ]
  return (
    <div className={styles.threeServesContainer}>
      <div style={{textAlign:'center',marginBottom:'8.52vh'}}>
        <span style={{fontSize:'2.08vw',color:'#000',fontFamily:'SHS-M'}}> 三统一服务</span>
      </div>
      <div className={styles.threeServesContent}>
        {list.map((item,index) => (
          <div className={styles.threeServesItem} key={index}>
            <div className={styles.threeServesItemIcon}>
              <img alt={item.title} src={item.icon} style={{width:'100%',height:'100%'}} />
            </div>
            <div className={styles.threeServesItemContent}>
              <div className={styles.threeServesItemTitle}>{item.title}</div>
              <div className={styles.threeServesItemLine} />
              <div className={styles.threeServesItemDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThreeServes;
