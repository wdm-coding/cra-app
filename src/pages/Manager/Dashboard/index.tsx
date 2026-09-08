import MarqueeText from '@/components/MarqueeText'
import styles from './index.less'
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <MarqueeText text="这是一段短文本。" />
      <MarqueeText text="这是一段超长文本，当它超出容器宽度时会自动无缝滚动，如果不超出则保持静止。" />
    </div>
  )
}

export default Dashboard
