import { ProColumns, ProTable } from '@ant-design/pro-components'
import { Button, Popconfirm } from 'antd'
import { useRef, useState } from 'react'
import { getUserList } from '@/api/express/systemManage/userManage'
import dayjs from 'dayjs'
import UserFormDrawer from './modules/UserFormDrawer'
import {
  deleteUser,
  applyCertificate,
  cancelCertificate,
  downloadCertificate
} from '@/api/express/systemManage/userManage'
interface DataType {
  id: string
  name: string
  username: string
  email: string
  phone: string
  age: number
  cert?: boolean
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
            {record.cert ? (
              <>
                <Button
                  key="cancelCertificate"
                  onClick={() => onCancelCertificate(record)}
                  style={{ color: '#ff0000' }}
                  type="link"
                >
                  注销证书
                </Button>
                <Button
                  key="downloadCertificate"
                  onClick={() => onDownloadCertificate(record)}
                  style={{ color: '#52c41a' }}
                  type="link"
                >
                  下载证书
                </Button>
              </>
            ) : (
              <Button
                key="applyCertificate"
                onClick={() => onApplyCertificate(record)}
                style={{ color: '#52c41a' }}
                type="link"
              >
                申请证书
              </Button>
            )}
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
  // 请求用户列表
  const request = async (params: any) => {
    const { code, list, total }: any = await getUserList(params)
    return {
      data: list || [],
      success: code === 0,
      total: total || 0
    }
  }
  // 新增用户
  const onAdd = () => {
    setVisible(true)
    setDrawerType('add')
  }
  // 编辑用户
  const onEdit = (record: DataType) => {
    setRowValues(record)
    setVisible(true)
    setDrawerType('edit')
  }
  // 申请证书
  const onApplyCertificate = async (record: DataType) => {
    const { code }: any = await applyCertificate(record.id as string)
    if (code === 0) {
      actionRef.current?.reload()
      window.$message.success('申请证书成功')
    }
  }
  // 注销证书
  const onCancelCertificate = async (record: DataType) => {
    const { code }: any = await cancelCertificate(record.id as string)
    if (code === 0) {
      actionRef.current?.reload()
      window.$message.success('注销证书成功')
    }
  }
  // 下载证书
  const onDownloadCertificate = async (record: DataType) => {
    const { code,data }: any = await downloadCertificate(record.id as string)
    if (code === 0) {
      // 1. 强制指定 MIME Type 为 application/x-pkcs12
      // 这样浏览器就知道它是证书文件，而不是“未知二进制文件”
      const correctBlob = new Blob([data.blob], { type: 'application/x-pkcs12' });

      // 2. 创建下载链接
      const url = window.URL.createObjectURL(correctBlob);
      const link = document.createElement('a');
      link.href = url;
      
      // 3. 确保文件名后缀正确
      link.setAttribute('download', `${record.id}_certificate.p12`);
      document.body.appendChild(link);
      link.click();
      // 清理资源
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); 
    }
    else {
      window.$message.error('下载证书失败')
    }
  }
  // 关闭抽屉
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
