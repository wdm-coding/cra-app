import { Table, TableProps } from 'antd'
import { useCallback, useEffect, useState } from 'react'

type ColumnsType<T extends object> = TableProps<T>['columns']

interface DataType {
  id: string
  productServiceName: string // 产品和服务名称
  registrationStatus: string // 登记完成情况
  productServiceMethod: string // 产品和服务方式
  applicationScenario: string // 产品和服务的应用场景
  serviceFeeStandard: string // 产品和服务收费标准
  implementOrgName: string // 实施机构名称
  authorizedResourceName: string // 已授权的公共数据资源名称
  orgRegistrationStatus: string // 实施机构登记状态
  operationTerm: string // 运营期限
  disclosureTime: string // 信息披露时间
  rowSpan?: number // 行合并单元格的行数
}

const OptDetail: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [tableData, setTableData] = useState<DataType[]>([])
  const processData = useCallback(() => {
    const originData: any[] = [
      {
        id: '1',
        productServiceName: '产品服务1',
        registrationStatus: '已登记',
        productServiceMethod: '授权运营方式1',
        applicationScenario: '场景1',
        serviceFeeStandard: '1000元/月',
        implementOrgs: [
          {
            orgName: '实施机构1',
            authorizedResourceName: '公共数据资源1',
            orgRegistrationStatus: '已登记',
            operationTerm: '2023-01-01 至 2023-12-31',
            disclosureTime: '2023-01-01'
          },
          {
            orgName: '实施机构2',
            authorizedResourceName: '公共数据资源2',
            operationTerm: '2023-01-01 至 2023-12-31',
            orgRegistrationStatus: '已登记',
            disclosureTime: '2023-01-01'
          }
        ]
      },
      {
        id: '2',
        productServiceName: '产品服务2',
        registrationStatus: '已登记',
        productServiceMethod: '授权运营方式2',
        applicationScenario: '场景2',
        serviceFeeStandard: '2000元/月',
        implementOrgs: [
          {
            orgName: '实施机构3',
            authorizedResourceName: '产品服务2',
            operationTerm: '2023-01-01 至 2023-12-31',
            orgRegistrationStatus: '已登记',
            disclosureTime: '2023-01-01'
          }
        ]
      }
    ]
    const resultData: DataType[] = []
    originData.forEach((item: any) => {
      const orgCount = item.implementOrgs.length
      item.implementOrgs.forEach((org: any, index: number) => {
        resultData.push({
          id: `${item.id}-${index}`, // 为每个实施机构创建唯一ID
          productServiceName: item.productServiceName, // 产品和服务名称
          registrationStatus: item.registrationStatus, // 登记完成情况
          productServiceMethod: item.productServiceMethod, // 产品和服务方式
          applicationScenario: item.applicationScenario, // 产品和服务的应用场景
          serviceFeeStandard: item.serviceFeeStandard, // 产品和服务收费标准
          implementOrgName: org.orgName, // 实施机构名称
          authorizedResourceName: org.authorizedResourceName, // 已授权的公共数据资源名称
          orgRegistrationStatus: item.registrationStatus, // 实施机构登记状态
          operationTerm: org.operationTerm, // 运营期限
          disclosureTime: org.disclosureTime, // 信息披露时间
          rowSpan: index === 0 ? orgCount : 0 // 第一个实施机构行合并，其他行不显示
        })
      })
    })
    setTableData(resultData)
  }, [])
  useEffect(() => {
    processData()
  }, [processData])
  const columns: ColumnsType<DataType> = [
    {
      title: '产品和服务名称',
      dataIndex: 'productServiceName',
      key: 'productServiceName',
      onCell: (record: DataType) => {
        return {
          rowSpan: record.rowSpan
        }
      }
    },
    {
      title: '登记完成情况',
      dataIndex: 'registrationStatus',
      key: 'registrationStatus',
      onCell: (record: DataType) => {
        return {
          rowSpan: record.rowSpan
        }
      }
    },
    {
      title: '产品和服务方式',
      dataIndex: 'productServiceMethod',
      key: 'productServiceMethod',
      onCell: (record: DataType) => {
        return {
          rowSpan: record.rowSpan
        }
      }
    },
    {
      title: '产品和服务的应用场景',
      dataIndex: 'applicationScenario',
      key: 'applicationScenario',
      onCell: (record: DataType) => {
        return {
          rowSpan: record.rowSpan
        }
      }
    },
    {
      title: '产品和服务收费标准',
      dataIndex: 'serviceFeeStandard',
      key: 'serviceFeeStandard',
      onCell: (record: DataType) => {
        return {
          rowSpan: record.rowSpan
        }
      }
    },
    {
      title: '实施机构名称',
      dataIndex: 'implementOrgName',
      key: 'implementOrgName'
    },
    {
      title: '已授权的公共数据资源名称',
      dataIndex: 'authorizedResourceName',
      key: 'authorizedResourceName'
    },
    {
      title: '实施机构登记状态',
      dataIndex: 'orgRegistrationStatus',
      key: 'orgRegistrationStatus'
    },
    {
      title: '运营期限',
      dataIndex: 'operationTerm',
      key: 'operationTerm'
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
export default OptDetail
