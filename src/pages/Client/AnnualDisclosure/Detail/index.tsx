import { useLocation } from 'react-router'
import styles from './index.less'
import ImpDetail from './ImpDetail'
import OptDetail from './OptDetail'
const OrgDetail: React.FC = () => {
  const { activeKey } = useLocation().state as { activeKey: string }
  console.log(activeKey)
  return (
    <div className={styles.mainPage}>
      <div className={styles.title}>
        <div className={styles.bar} />
        <div
          className={styles.titleText}
        >{`${activeKey === 'imp' ? '实施' : '运营'}机构信息披露详情`}</div>
        <div className={styles.bar} />
      </div>
      <div className={styles.orgList}>
        {activeKey === 'imp' ? <ImpDetail /> : <OptDetail />}
      </div>
    </div>
  )
}
export default OrgDetail
