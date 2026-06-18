import { useCallback, useEffect, useState } from 'react'
import styles from './index.module.less'
import classnames from 'classnames'
import { Spin } from 'antd'
interface SelectTypeProps {
  apiFunction: () => Promise<any>
  onChange: (item: any) => void
}
interface SelectTypeItem {
  dicRef: string
  name: string
  treeNodes: any[]
}
const SelectType: React.FC<SelectTypeProps> = ({ onChange, apiFunction }) => {
  const [activeValue, setActiveValue] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<SelectTypeItem>()
  const fetchData = useCallback(async () => {
    setLoading(true)
    const { code, data } = await apiFunction()
    if (code === 200 && data) {
      setResult(data[0] || {})
    }
    setLoading(false)
  }, [apiFunction])
  useEffect(() => {
    fetchData()
  }, [fetchData])
  const onSelect = (item: any) => {
    if (item?.value === activeValue) {
      setActiveValue('')
      onChange(null)
      return
    }
    setActiveValue(item.value)
    onChange({
      dictRef: result?.dicRef,
      value: item.value
    })
  }
  return (
    <Spin spinning={loading}>
      <div className={styles.selectTypeContainer}>
        <div className={styles.title}>
          <div className={styles.titleIcon} />
          <div>{result?.name || ''}</div>
        </div>
        <div className={styles.selectList}>
          {result?.treeNodes?.map((item: any, index: number) => (
            <div
              className={classnames(styles.selectItem, {
                [styles.selectItemActive]: item.value === activeValue
              })}
              key={`${index}-${item.value}`}
              onClick={() => onSelect(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </Spin>
  )
}
export default SelectType
