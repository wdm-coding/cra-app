import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable
} from '@ant-design/pro-components'
import { Button, Popconfirm } from 'antd'
import { OperationOrgSearchForm, OperationOrgItem } from './types'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { getOptList, deleteOpt } from '@/api/annualDisclosure'

const OperationOrg: React.FC = () => {
  const actionRef = useRef<ActionType>(null)
  const navigate = useNavigate()
  // 模拟接口调用
  const fetchOperationOrgList = async (params: OperationOrgSearchForm) => {
    const res: any = await getOptList(params)
    return {
      list: res?.data.list || [],
      total: res?.data.total || 0
    }
  }

  // 列定义
  const columns: ProColumns<OperationOrgItem>[] = [
    {
      title: '运营机构名称',
      dataIndex: 'operatorName',
      key: 'operatorName',
      search: false
    },
    {
      title: '产品和服务名称',
      dataIndex: 'productName',
      key: 'productName'
    },
    {
      title: '登记确认单编号',
      dataIndex: 'registerConfirmNo',
      key: 'registerConfirmNo'
    },
    {
      title: '产品和服务方式',
      dataIndex: 'productServiceWay',
      key: 'productServiceWay',
      valueEnum: {
        1: '公共数据资源',
        2: '私有数据资源',
        3: '混合数据资源'
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      search: false
    },
    {
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: (_, record) => [
        <Button
          key="detail"
          onClick={() => jumpToOperationOrgDetail(record)}
          type="link"
        >
          详情
        </Button>,
        <Button
          key="edit"
          onClick={() => jumpToOperationOrgForm(record)}
          type="link"
        >
          修改
        </Button>,
        <Popconfirm
          key="delete"
          onConfirm={async () => {
            const data = await deleteOpt(record.id!)
            if (data) {
              actionRef.current?.reload()
            }
          }}
          title="确认删除吗？"
        >
          <Button type="link">删除</Button>
        </Popconfirm>
      ]
    }
  ]

  // 跳转运营机构信息表单页
  const jumpToOperationOrgForm = (record?: OperationOrgItem) => {
    navigate('/manager/registerPlatform/annualDisclosure/operationOrgForm', {
      state: record
    })
  }

  // 跳转运营机构信息详情页
  const jumpToOperationOrgDetail = (record?: OperationOrgItem) => {
    navigate('/manager/registerPlatform/annualDisclosure/operationOrgDetail', {
      state: record
    })
  }

  return (
    <PageContainer breadcrumbRender={false} title="运营机构信息管理">
      <ProTable<OperationOrgItem, OperationOrgSearchForm>
        actionRef={actionRef}
        columns={columns}
        pagination={{
          showSizeChanger: true
        }}
        request={async (params) => {
          const { list, total } = await fetchOperationOrgList({
            ...params,
            pageNum: params.current,
            pageSize: 10
          })
          return {
            data: list,
            total,
            success: true
          }
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto'
        }}
        toolBarRender={() => [
          <Button
            key="add"
            onClick={() => jumpToOperationOrgForm()}
            type="primary"
          >
            增加
          </Button>
        ]}
      />
    </PageContainer>
  )
}

export default OperationOrg
