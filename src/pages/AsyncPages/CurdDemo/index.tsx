import { getUsers } from '@/api/user'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
export const waitTime = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
const CurdDemo = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index'
    },
    {
      title: '用户名',
      dataIndex: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      hideInSearch: true
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (_: any, record: any) => [
        <Button key="edit">编辑</Button>,
        <Button key="delete" style={{ marginLeft: 8 }}>
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
        }
      }}
      className="table-wrap"
      columns={columns}
      form={{
        labelAlign: 'left',
        layout: 'horizontal'
      }}
      pagination={false}
      request={async () => {
        await waitTime(2000)
        const { code, data } = await getUsers()
        if (code === 0 && data !== null) {
          console.log(data)
          return {
            data: data,
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
      // scroll={{
      //   y: '500px'
      // }}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      tableClassName="table-nowrap"
      tableStyle={{
        padding: '15px'
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
