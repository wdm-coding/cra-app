import styles from './index.less'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ProcessContent from './modules/ProcessContent';

const ProcessRecord = () => {
  const items: TabsProps['items'] = [
  {
    key: '1',
    label: '合规性审批流程',
    children: <div>合规性审批流程 Content</div>,
  },
  {
    key: '2',
    label: '登记流程',
    children: <ProcessContent type="2" />,
  },
  {
    key: '3',
    label: '注销流程',
    children: <ProcessContent type="3" />,
  },
];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className={styles.processRecordContainer}>
      <h1>流程记录</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default ProcessRecord