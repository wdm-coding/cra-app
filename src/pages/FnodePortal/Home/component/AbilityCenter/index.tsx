import styles from './index.module.less'

const AbilityCenter:React.FC = () => {
  const list = [
    {
      title: '公共数据授权运营平台',
      icon:require('@/assets/images/portalImg/abilityCenter-icon1.png'),
      desc:'提供数据资源的合规授权，全流程管控与市场化运营支撑。',
    },
    {
      title: '公共数据资源登记平台',
      icon:require('@/assets/images/portalImg/abilityCenter-icon2.png'),
      desc:'建立公共数据资源目录，实现数据确权、登记、备案与溯源管理，确保数据来源可溯、权责清晰。',
    },
    {
      title: '数据沙箱',
      icon:require('@/assets/images/portalImg/abilityCenter-icon3.png'),
      desc:'提供安全隔离环境，支持数据脱敏、产品测试与算法调试，实现数据可用不可见。',
    },
    {
      title: '存证服务',
      icon:require('@/assets/images/portalImg/abilityCenter-icon4.png'),
      desc:'提供区块链底层基础设施，保障数据交易安全可信。',
    }
  ]
  return (
    <div className={styles.abilityCenter}>
      <div style={{ textAlign: 'center', marginBottom: '8.52vh' }}>
        <span style={{ fontSize: '2.08vw', color: '#000', fontFamily: 'SHS-M' }}>能力中心</span>
      </div>
      <div className={styles.abilityCenterList}>
        {list.map((item, index) => (
          <div className={styles.abilityCenterItem}  key={index}>
            <div className={styles.abilityCenterIcon}>
              <img alt={item.title} src={item.icon} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className={styles.abilityCenterText}>
              <div className={styles.abilityCenterTitle}>{item.title}</div>
              <div className={styles.abilityCenterDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AbilityCenter
