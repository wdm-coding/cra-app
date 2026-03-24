import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable
} from '@ant-design/pro-components'
import { Button, Popconfirm } from 'antd'
import { ImplementOrgSearchForm, ImplementOrgItem } from './types'
import { useNavigate } from 'react-router-dom'
import { getImpList, deleteImp } from '@/api/annualDisclosure'
import { useRef } from 'react'
const ImplementOrg: React.FC = () => {
  const navigate = useNavigate()
  const actionRef = useRef<ActionType>(null)
  // 获取实施机构列表
  const fetchImplementOrgList = async (params: ImplementOrgSearchForm) => {
    const res: any = await getImpList(params)
    return {
      list: res?.data.list || [],
      total: res?.data.total || 0
    }
  }

  // 列定义
  const columns: ProColumns<ImplementOrgItem>[] = [
    // 增加授权时间搜索范围
    {
      title: '授权时间',
      dataIndex: 'authorizedTime',
      key: 'authorizedTime',
      valueType: 'dateRange',
      hideInTable: true
    },
    {
      title: '实施机构名称',
      dataIndex: 'implementOrgName',
      key: 'implementOrgName'
    },
    {
      title: '已授权公共数据资源名称',
      dataIndex: 'authorizedDataName',
      key: 'authorizedDataName'
    },
    {
      title: '运营机构名称',
      dataIndex: 'operatorName',
      key: 'operatorName'
    },
    {
      title: '授权开始时间',
      dataIndex: 'authorizedStartTime',
      key: 'authorizedStartTime',
      search: false
    },
    {
      title: '授权结束时间',
      dataIndex: 'authorizedEndTime',
      key: 'authorizedEndTime',
      search: false
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
          onClick={() => jumpToImplementOrgDetail(record)}
          type="link"
        >
          详情
        </Button>,
        <Button
          key="edit"
          onClick={() => jumpToImplementOrgForm(record)}
          type="link"
        >
          修改
        </Button>,
        <Popconfirm
          key="delete"
          onConfirm={async () => {
            const res = await deleteImp(record.id!)
            if (res) {
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

  // 跳转实施机构信息表单页
  const jumpToImplementOrgForm = (record?: ImplementOrgItem) => {
    navigate('/manager/registerPlatform/annualDisclosure/implementOrgForm', {
      state: record
    })
  }

  // 跳转实施机构信息详情页
  const jumpToImplementOrgDetail = (record?: ImplementOrgItem) => {
    navigate('/manager/registerPlatform/annualDisclosure/implementOrgDetail', {
      state: record
    })
  }

  return (
    <PageContainer breadcrumbRender={false} title="实施机构信息管理">
      <ProTable<ImplementOrgItem, ImplementOrgSearchForm>
        actionRef={actionRef}
        columns={columns}
        pagination={{
          showSizeChanger: true
        }}
        request={async (params) => {
          const { list, total } = await fetchImplementOrgList({
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
            onClick={() => jumpToImplementOrgForm()}
            type="primary"
          >
            增加
          </Button>
        ]}
      />
    </PageContainer>
  )
}

export default ImplementOrg
