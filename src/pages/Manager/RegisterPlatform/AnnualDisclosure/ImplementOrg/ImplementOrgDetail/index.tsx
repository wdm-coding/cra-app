// 实施机构信息详情页
import {
  PageContainer,
  ProDescriptions,
  ProDescriptionsItemProps
} from '@ant-design/pro-components'
import { Card, Table, TableProps } from 'antd'
interface baseInfoItem {
  orgName: string
  creditCode: string
  address: string
  email: string
  phone: string
}
interface publicDataItem {
  registerStatus: string
  authorizedDataNames: string
  registerConfirmationNumber: string
  authorizedOperationWay: string
  authorizedDataServiceUpperLimit: string
}
interface authorityOptItem {
  id?: string
  authorityOptName: string
  creditCode: string
  operationTerm: string
}
interface dataMngItem {
  id?: string
  unitName: string
  contact: string
  phone: string
}
const ImplementOrgDetail: React.FC = () => {
  // 实施机构基础信息
  const baseInfoColumns: ProDescriptionsItemProps<baseInfoItem>[] = [
    {
      title: '实施机构名称',
      dataIndex: 'orgName',
      key: 'orgName'
    },
    {
      title: '统一社会信用代码',
      dataIndex: 'creditCode',
      key: 'creditCode'
    },
    {
      title: '地址(含邮编)',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '固定电话',
      dataIndex: 'phone',
      key: 'phone'
    }
  ]
  // 公共数据资源授权信息
  const publicDataColumns: ProDescriptionsItemProps<publicDataItem>[] = [
    {
      title: '登记完成情况',
      dataIndex: 'registerStatus',
      key: 'registerStatus'
    },
    {
      title: '已授权公共数据资源名称',
      dataIndex: 'authorizedDataNames',
      key: 'authorizedDataNames'
    },
    {
      title: '登记确认单编号',
      dataIndex: 'registerConfirmationNumber',
      key: 'registerConfirmationNumber'
    },
    {
      title: '授权运营方式',
      dataIndex: 'authorizedOperationWay',
      key: 'authorizedOperationWay'
    },
    {
      title: '已授权的公共数据资源运营服务上限收费标准',
      dataIndex: 'authorizedDataServiceUpperLimit',
      key: 'authorizedDataServiceUpperLimit'
    }
  ]
  // 已授权的运营机构
  const authorityOptColumns: TableProps<authorityOptItem>['columns'] = [
    {
      title: '运营机构名称',
      dataIndex: 'authorityOptName',
      key: 'authorityOptName'
    },
    {
      title: '统一社会信用代码',
      dataIndex: 'creditCode',
      key: 'creditCode'
    },
    {
      title: '运营服务期限',
      dataIndex: 'operationTerm',
      key: 'operationTerm'
    }
  ]
  // 数据管理部门信息
  const dataMngColumns: TableProps<dataMngItem>['columns'] = [
    {
      title: '单位名称',
      dataIndex: 'unitName',
      key: 'unitName'
    },
    {
      title: '联系人',
      dataIndex: 'contact',
      key: 'contact'
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone'
    }
  ]
  return (
    <PageContainer breadcrumbRender={false} title="实施机构信息详情">
      <Card title="实施机构基础信息">
        <ProDescriptions
          column={2}
          columns={baseInfoColumns}
          dataSource={{
            orgName: '实施机构1',
            creditCode: '91370100MA1234567890',
            address: '北京市海淀区',
            email: 'bank@bank.com.cn',
            phone: '010-88888888'
          }}
        />
      </Card>
      <Card title="公共数据资源授权信息">
        <ProDescriptions
          column={2}
          columns={publicDataColumns}
          dataSource={{
            registerStatus: '已登记',
            authorizedDataNames: '数据资源1,数据资源2',
            registerConfirmationNumber: '1234567890',
            authorizedOperationWay: '运营机构',
            authorizedDataServiceUpperLimit: '1000000元/月'
          }}
        />
        {/* 已授权的运营机构 */}
        <Table<authorityOptItem>
          bordered
          columns={authorityOptColumns}
          dataSource={[
            {
              id: '1',
              authorityOptName: '运营机构1',
              creditCode: '91370100MA1234567890',
              operationTerm: '2025年1月1日至2025年12月31日'
            },
            {
              id: '2',
              authorityOptName: '运营机构2',
              creditCode: '91370100MA1234567890',
              operationTerm: '2025年1月1日至2025年12月31日'
            }
          ]}
        />
      </Card>
      <Card title="数据管理部门信息">
        <Table<dataMngItem>
          bordered
          columns={dataMngColumns}
          dataSource={[
            {
              id: '1',
              unitName: '单位1',
              contact: '张三',
              phone: '010-88888888'
            },
            {
              id: '2',
              unitName: '单位2',
              contact: '李四',
              phone: '010-88888889'
            }
          ]}
        />
      </Card>
    </PageContainer>
  )
}

export default ImplementOrgDetail
