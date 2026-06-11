import React from 'react'
import styles from './index.less'
import { Steps } from 'antd';
import type { StepsProps } from 'antd';
const ProcessContent:React.FC<{type: string}> = ({type}) => {
  const items: StepsProps['items'] = [
    {
      title: '步骤1',
      description: '2023-08-01',
    },
    {
      title: '步骤2',
      description: '2023-08-02',
    },
    {
      title: '步骤3',
      description: '2023-08-03',
    },
  ]
  return (
    <div className={styles.processContentContainer}>
      <Steps items={items} labelPlacement='vertical'/>
    </div>
  )
}

export default ProcessContent