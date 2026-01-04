import { getUsers } from '@/api/user'
import { ProColumns, ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import styles from './index.less'
export const waitTime = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
const CurdDemo = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index'
    },
    {
      title: '用户名',
      dataIndex: 'username'
    },
    {
      title: '组织名称',
      dataIndex: 'orgName'
    },
    {
      title: '统一社会信用代码',
      dataIndex: 'creditCode'
    },
    {
      title: '组织类型',
      dataIndex: 'orgType'
    },
    {
      title: '负责人姓名',
      dataIndex: 'name'
    },
    {
      title: '负责人证件号',
      dataIndex: 'idCard'
    },
    {
      title: '负责人手机号',
      dataIndex: 'phone'
    },
    {
      title: '负责人邮箱',
      dataIndex: 'email'
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (_: any, record: any) => [
        <Button key="edit" style={{ color: '#1677ff' }} type="link">
          编辑
        </Button>,
        <Button key="delete" style={{ marginLeft: 4, color: '#F5222D' }} type="link">
          删除
        </Button>
      ]
    }
  ]
  return (
    <ProTable
      bordered={true}
      cardProps={{
        style: {
          minHeight: 0,
          flex: 1
        },
        bodyStyle: {
          display: 'flex',
          flexDirection: 'column'
        }
      }}
      className={styles['can-scroll-table-wrap']}
      columns={columns}
      form={{
        labelWidth: 'auto'
      }}
      request={async (params) => {
        console.log('params', params)
        await waitTime(1000)
        const { code, data } = await getUsers()
        if (code === 0 && data !== null) {
          return {
            data: [],
            success: true
          }
        } else {
          return {
            data: [],
            success: false
          }
        }
      }}
      rowKey="id"
      scroll={{
        y: 'auto'
      }}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      tableClassName={styles['table-custom-wrap']}
      tableStyle={{
        padding: '15px',
        minHeight: 0,
        flex: 1
      }}
      toolBarRender={() => [
        <Button key="1" type="primary">
          新增
        </Button>
      ]}
    />
  )
}

export default CurdDemo
