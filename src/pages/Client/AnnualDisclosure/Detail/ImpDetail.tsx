import { Table, TableProps } from 'antd'
import { useState } from 'react'

type ColumnsType<T extends object> = TableProps<T>['columns']

interface DataType {
  id: string
  authorizedDataName: string
  registrationStatus: string
  authorizationMethod: string
  serviceFeeStandard: string
  authorizedOrgName: string
  authorizationPeriod: string
  disclosureTime: string
}

const ImpDetail: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const tableData: DataType[] = [
    {
      id: '1',
      authorizedDataName: '公共数据资源1',
      registrationStatus: '已登记',
      authorizationMethod: '授权运营方式1',
      serviceFeeStandard: '1000元/月',
      authorizedOrgName: '运营机构1',
      authorizationPeriod: '2023-01-01 至 2023-12-31',
      disclosureTime: '2023-01-01'
    }
  ]
  const columns: ColumnsType<DataType> = [
    {
      title: '已授权的公共数据资源名称',
      dataIndex: 'authorizedDataName',
      key: 'authorizedDataName'
    },
    {
      title: '登记完成情况',
      dataIndex: 'registrationStatus',
      key: 'registrationStatus'
    },
    {
      title: '授权运营方式',
      dataIndex: 'authorizationMethod',
      key: 'authorizationMethod'
    },
    {
      title: '已授权的公共数据资源运营服务上收费标准',
      dataIndex: 'serviceFeeStandard',
      key: 'serviceFeeStandard'
    },
    {
      title: '已授权的运营机构名称',
      dataIndex: 'authorizedOrgName',
      key: 'authorizedOrgName'
    },
    {
      title: '运营机构授权运营期限',
      dataIndex: 'authorizationPeriod',
      key: 'authorizationPeriod'
    },
    {
      title: '信息披露时间',
      dataIndex: 'disclosureTime',
      key: 'disclosureTime'
    }
  ]
  return (
    <div>
      <Table<DataType>
        bordered
        columns={columns}
        dataSource={tableData}
        loading={loading}
        pagination={{
          pageSize: 10
        }}
        rowKey={(record) => record.id}
      />
    </div>
  )
}
export default ImpDetail
