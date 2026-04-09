import { ProColumns, ProTable } from '@ant-design/pro-components'
import { Button, Popconfirm } from 'antd'
import { useRef, useState } from 'react'
import { getUserList } from '@/api/express/systemManage/userManage'
import dayjs from 'dayjs'
import UserFormDrawer from './modules/UserFormDrawer'
import { deleteUser } from '@/api/express/systemManage/userManage'
interface DataType {
  id: string
  name: string
  username: string
  email: string
  phone: string
  age: number
  createdAt?: string
}
interface Params {
  pageNum: number
  pageSize: number
}
const UserManage: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [rowValues, setRowValues] = useState<any>(null)
  const [drawerType, setDrawerType] = useState<'add' | 'edit'>('add')
  const actionRef = useRef<any>(null)
  const columns: ProColumns<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, record) => dayjs(record.createdAt).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (_, record) => {
        return record.username === 'admin' ? (
          '--'
        ) : (
          <div>
            <Button key="edit" onClick={() => onEdit(record)} type="link">
              编辑
            </Button>
            <Popconfirm
              key="delete"
              onConfirm={async () => {
                const { code }: any = await deleteUser(record.id)
                if (code === 0) {
                  window.$message.success('删除成功')
                  actionRef.current?.reload()
                }
              }}
              title="确认删除吗？"
            >
              <Button style={{ color: '#ff0000' }} type="link">
                删除
              </Button>
            </Popconfirm>
          </div>
        )
      }
    }
  ]
  const request = async (params: any) => {
    const { code, list, total }: any = await getUserList(params)
    return {
      data: list || [],
      success: code === 0,
      total: total || 0
    }
  }
  const onAdd = () => {
    setVisible(true)
    setDrawerType('add')
  }
  const onEdit = (record: DataType) => {
    setRowValues(record)
    setVisible(true)
    setDrawerType('edit')
  }
  const onDelete = (record: DataType) => {
    console.log('删除用户', record)
  }
  const onCloseHandler = (type?: 'add' | 'edit') => {
    setVisible(false)
    setRowValues(null)
    if (type) {
      actionRef.current?.reload()
    }
  }
  return (
    <div>
      <ProTable<DataType, Params>
        actionRef={actionRef}
        bordered
        columns={columns}
        options={false}
        request={request}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button key="add" onClick={onAdd} type="primary">
            增加
          </Button>
        ]}
      />
      <UserFormDrawer
        onClose={(type?: 'add' | 'edit') => onCloseHandler(type)}
        record={rowValues}
        type={drawerType}
        visible={visible}
      />
    </div>
  )
}
export default UserManage
