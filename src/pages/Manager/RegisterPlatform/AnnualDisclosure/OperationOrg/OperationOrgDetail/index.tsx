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
interface authorizedDataItem {
  registerStatus: string
  authorizedDataNames: string
  registerConfirmationNumber: string
  authorizedOperationWay: string
  authorizedDataServiceScene: string
  authorizedDataServicePrice: string
}
interface impOrgItem {
  id?: string
  impOrgName: string
  registerStatus: string
  authorizedDataNames: string
  registerConfirmationNumber: string
  operationTerm: string
}
interface dataMngItem {
  id?: string
  unitName: string
  contact: string
  phone: string
}
const OperationOrgDetail: React.FC = () => {
  // 运营机构基础信息
  const baseInfoColumns: ProDescriptionsItemProps<baseInfoItem>[] = [
    {
      title: '运营机构名称',
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
  // 已授权的公共数据资源信息
  const authorizedDataColumns: ProDescriptionsItemProps<authorizedDataItem>[] =
    [
      {
        title: '登记完成情况',
        dataIndex: 'registerStatus',
        key: 'registerStatus'
      },
      {
        title: '产品和服务名称',
        dataIndex: 'authorizedDataNames',
        key: 'authorizedDataNames'
      },
      {
        title: '登记确认单编号',
        dataIndex: 'registerConfirmationNumber',
        key: 'registerConfirmationNumber'
      },
      {
        title: '产品和服务方式',
        dataIndex: 'authorizedOperationWay',
        key: 'authorizedOperationWay'
      },
      {
        title: '产品和服务的应用场景',
        dataIndex: 'authorizedDataServiceScene',
        key: 'authorizedDataServiceScene'
      },
      {
        title: '产品和服务的收费标准',
        dataIndex: 'authorizedDataServicePrice',
        key: 'authorizedDataServicePrice'
      }
    ]
  // 实施机构信息
  const impOrgColumns: TableProps<impOrgItem>['columns'] = [
    {
      title: '实施机构名称',
      dataIndex: 'impOrgName',
      key: 'impOrgName'
    },
    {
      title: '登记完成情况',
      dataIndex: 'registerStatus',
      key: 'registerStatus'
    },
    {
      title: '已授权的公共数据资源名称',
      dataIndex: 'authorizedDataNames',
      key: 'authorizedDataNames'
    },
    {
      title: '确认单编号',
      dataIndex: 'registerConfirmationNumber',
      key: 'registerConfirmationNumber'
    },
    {
      title: '运营期限',
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
    <PageContainer breadcrumbRender={false} title="运营机构信息详情">
      <Card title="运营机构基础信息">
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
      <Card title="已授权的公共数据资源信息">
        <ProDescriptions
          column={2}
          columns={authorizedDataColumns}
          dataSource={{
            registerStatus: '已登记',
            authorizedDataNames: '数据资源1,数据资源2',
            registerConfirmationNumber: '1234567890',
            authorizedOperationWay: '运营机构',
            authorizedDataServiceScene: '运营服务',
            authorizedDataServicePrice: '1000000元/月'
          }}
        />
        {/* 已授权的运营机构 */}
        <Table<impOrgItem>
          bordered
          columns={impOrgColumns}
          dataSource={[
            {
              id: '1',
              impOrgName: '运营机构1',
              registerStatus: '已登记',
              authorizedDataNames: '数据资源1,数据资源2',
              registerConfirmationNumber: '1234567890',
              operationTerm: '2025年1月1日至2025年12月31日'
            },
            {
              id: '2',
              impOrgName: '运营机构2',
              registerStatus: '已登记',
              authorizedDataNames: '数据资源3,数据资源4',
              registerConfirmationNumber: '234567890',
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

export default OperationOrgDetail
