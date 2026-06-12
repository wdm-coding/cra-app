import { useState } from 'react'
import styles from './index.module.less'
import classnames from 'classnames'
interface SelectTypeProps {
  title: string
  items: {
    key: string
    label: string
  }[]
  activeKey: string
  onChange: (key: string) => void
}
const SelectType: React.FC<SelectTypeProps> = ({ title, items, onChange, activeKey }) => {
  return (
    <div className={styles.selectTypeContainer}>
      <div className={styles.title}>
        <div className={styles.titleIcon} />
        <div>{title}</div>
      </div>
      <div className={styles.selectList}>
        {items.map((item) => (
          <div
            className={classnames(styles.selectItem, {
              [styles.selectItemActive]: item.key === activeKey
            })}
            key={item.key}
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
export default SelectType
