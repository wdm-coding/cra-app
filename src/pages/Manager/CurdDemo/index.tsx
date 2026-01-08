import { getUsers, deleteUser, User } from '@/api/user'
import { ProColumns, ProTable, ActionType } from '@ant-design/pro-components'
import { Button, message, Modal, Popconfirm } from 'antd'
import styles from './index.less'
import { useRef, useState } from 'react'
import UpdateForm from './modules/UpdateForm'
export const waitTime = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
const CurdDemo = () => {
  const actionRef = useRef<ActionType>(null)
  const [formOpen, setFormOpen] = useState<boolean>(false)
  const [rowData, setRowData] = useState<User | null>(null)
  const columns: ProColumns<User>[] = [
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
        <Button key="edit" onClick={() => onEdit(record)} style={{ color: '#1677ff' }} type="link">
          编辑
        </Button>,
        <Popconfirm
          cancelText="取消"
          description="是否确认删除此条数据?"
          key="delete"
          okText="确认"
          onConfirm={() => onDelete(record?.id)}
          title="确认删除？"
        >
          <Button style={{ marginLeft: 4, color: '#F5222D' }} type="link">
            删除
          </Button>
        </Popconfirm>
      ]
    }
  ]
  const onAdd = async () => {
    setRowData(null)
    setFormOpen(true)
  }
  const onEdit = (record: User) => {
    setRowData(record)
    setFormOpen(true)
  }
  const onDelete = async (id: number) => {
    const { code, msg } = await deleteUser(id)
    if (code === 0) {
      onSuccess('删除成功')
    } else {
      message.error(msg)
    }
  }
  const onSuccess = (msg: string) => {
    setFormOpen(false)
    message.success(msg)
    actionRef.current?.reload()
  }
  return (
    <>
      <ProTable
        actionRef={actionRef}
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
              data,
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
          <Button key="1" onClick={onAdd} type="primary">
            新增
          </Button>
        ]}
      />
      <Modal footer={false} onCancel={() => setFormOpen(false)} open={formOpen} title={rowData ? '编辑' : '新增'}>
        <UpdateForm onSuccess={onSuccess} open={formOpen} rowData={rowData} />
      </Modal>
    </>
  )
}

export default CurdDemo
