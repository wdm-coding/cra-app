import { getUsers } from '@/api/user'
import { ProTable } from '@ant-design/pro-components'
const CurdDemo = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age'
    }
  ]
  return (
    <ProTable
      bordered={true}
      columns={columns}
      form={{
        labelAlign: 'left',
        layout: 'horizontal'
      }}
      pagination={false}
      request={async () => {
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
      toolBarRender={false}
    />
  )
}

export default CurdDemo
