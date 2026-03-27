import {
  EditableProTable,
  PageContainer,
  ProColumns,
  ProForm,
  ProFormDependency,
  ProFormInstance,
  ProFormItem,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components'
import { Button, message } from 'antd'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OperationOrgItem } from '../types'
import { addOpt } from '@/api/annualDisclosure'
let editableRowIdCounter = 1000000
function createEditableRowId(): string {
  editableRowIdCounter += 1
  return String(editableRowIdCounter)
}
const OperationOrgForm: React.FC = () => {
  const location = useLocation()
  const navigator = useNavigate()
  const record = location.state as OperationOrgItem | undefined
  console.log(record)
  const formRef = useRef<ProFormInstance<any>>(null)
  // 回显表单数据
  useEffect(() => {
    formRef.current?.setFieldsValue({
      operatorName: '测试运营机构',
      creditCode: '916204536145620',
      address: '中国甘肃省兰州市大数据中心720025',
      email: 'test@example.com',
      phone: '13800000000',
      registrationStatus: '1',
      productName: '测试产品',
      registerConfirmNo: 'GAN1242345242345',
      productServiceWay: '1',
      productServiceSceneType: '1',
      productServiceSceneDesc: '测试产品和服务的应用场景描述',
      productServiceFee: '不知道',
      implementOrgs: [
        {
          id: createEditableRowId(),
          implementOrgName: '测试实施机构',
          registrationStatus: '1',
          authorizedDataResourceName: '测试已授权公共数据资源名称',
          registerConfirmNo: 'GAN1242345242345',
          operationTerm: ['2023-01-01', '2023-12-31']
        }
      ],
      dataManagementDepartments: [
        {
          id: createEditableRowId(),
          unitName: '单位1',
          contact: '张三',
          phone: '13800000000'
        }
      ]
    })
    if (record) {
      formRef.current?.setFieldsValue(record)
    }
  }, [record])
  // 提交表单
  const onSubmit = async (values: any) => {
    const params = {
      ...values
    }
    try {
      const data = await addOpt(params)
      if (data) {
        message.success('添加成功')
        formRef.current?.resetFields()
        navigator('/manager/registerPlatform/annualDisclosure/operationOrg')
      } else {
        message.error('添加失败')
      }
    } catch (err) {
      message.error('添加失败')
      throw console.log(err)
    }
  }
  const implementOrgColumns: ProColumns<any>[] = [
    {
      title: '实施机构名称',
      dataIndex: 'implementOrgName',
      key: 'implementOrgName',
      formItemProps: {
        rules: [{ required: true, message: '请输入实施机构名称' }]
      }
    },
    {
      title: '登记完成情况',
      dataIndex: 'registrationStatus',
      key: 'registrationStatus',
      formItemProps: {
        rules: [{ required: true, message: '请输入登记完成情况' }]
      },
      valueEnum: {
        1: '已完成',
        2: '未完成'
      }
    },
    {
      title: '已授权公共数据资源名称',
      dataIndex: 'authorizedDataResourceName',
      key: 'authorizedDataResourceName',
      formItemProps: {
        rules: [{ required: true, message: '请输入已授权公共数据资源名称' }]
      }
    },
    {
      title: '确认单编号',
      dataIndex: 'registerConfirmNo',
      key: 'registerConfirmNo',
      formItemProps: {
        rules: [{ required: true, message: '请输入确认单编号' }]
      }
    },
    {
      title: '运营期限',
      dataIndex: 'operationTerm',
      key: 'operationTerm',
      valueType: 'dateRange',
      formItemProps: {
        rules: [{ required: true, message: '请输入运营期限' }]
      },
      render: (text, record, _, action) => {
        return record.operationTerm?.join('至') || '-'
      }
    },
    {
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: (text, record, _, action) => [
        <Button
          key="edit"
          onClick={() => {
            action?.startEditable?.(record.id, record)
          }}
          type="link"
        >
          编辑
        </Button>,
        <Button
          key="delete"
          onClick={() => {
            const tableDataSource =
              formRef.current?.getFieldValue('authorizedOperations') || []
            const newTableDataSource = tableDataSource.filter(
              (item: any) => item.id !== record.id
            )
            formRef.current?.setFieldValue(
              'authorizedOperations',
              newTableDataSource
            )
          }}
          type="link"
        >
          删除
        </Button>
      ]
    }
  ]
  const implementOrgList: any[] = [
    {
      id: 1,
      implementOrgName: '',
      registrationStatus: '',
      authorizedDataResourceName: '',
      registerConfirmNo: '',
      operationTerm: []
    }
  ]
  const dataManagementDepartmentColumns: ProColumns<any>[] = [
    {
      title: '单位名称',
      dataIndex: 'unitName',
      key: 'unitName',
      formItemProps: {
        rules: [{ required: true, message: '请输入单位名称' }]
      }
    },
    {
      title: '联系人',
      dataIndex: 'contact',
      key: 'contact',
      formItemProps: {
        rules: [{ required: true, message: '请输入联系人' }]
      }
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
      formItemProps: {
        rules: [{ required: true, message: '请输入联系电话' }]
      }
    },
    {
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: (text, record, _, action) => [
        <Button
          key="edit"
          onClick={() => {
            action?.startEditable?.(record.id, record)
          }}
          type="link"
        >
          编辑
        </Button>,
        <Button
          key="delete"
          onClick={() => {
            const tableDataSource =
              formRef.current?.getFieldValue('dataManagementDepartments') || []
            const newTableDataSource = tableDataSource.filter(
              (item: any) => item.id !== record.id
            )
            formRef.current?.setFieldValue(
              'dataManagementDepartments',
              newTableDataSource
            )
          }}
          type="link"
        >
          删除
        </Button>
      ]
    }
  ]
  const dataManagementDepartmentList: any[] = [
    {
      id: 1,
      unitName: '',
      contact: '',
      phone: ''
    }
  ]
  return (
    <PageContainer breadcrumbRender={false} title="信息维护">
      <ProForm
        colProps={{
          span: 24
        }}
        formRef={formRef}
        grid
        initialValues={{
          implementOrgs: implementOrgList,
          dataManagementDepartments: dataManagementDepartmentList
        }}
        labelCol={{
          span: 8
        }}
        labelWrap={true}
        layout="horizontal"
        onFinish={onSubmit}
        style={{ width: 600 }}
        wrapperCol={{
          span: 16
        }}
      >
        {/* 运营机构基础信息区 */}
        <ProForm.Group title="运营机构基础信息区">
          <ProFormText
            label="运营机构名称"
            name="operatorName"
            placeholder="请输入内容"
            rules={[{ required: true, message: '请输入运营机构名称' }]}
          />
          <ProFormText
            label="统一社会信用代码"
            name="creditCode"
            placeholder="请输入内容"
            rules={[{ required: true, message: '请输入统一社会信用代码' }]}
          />
          <ProFormText
            label="地址（含邮编）"
            name="address"
            placeholder="请输入内容"
            rules={[{ required: true, message: '请输入地址' }]}
          />
          <ProFormText
            label="邮箱"
            name="email"
            placeholder="请输入内容"
            rules={[{ required: true, message: '请输入邮箱' }]}
          />
          <ProFormText
            label="固定电话"
            name="phone"
            placeholder="请输入固定电话"
            rules={[{ required: true, message: '请输入固定电话' }]}
          />
        </ProForm.Group>
        {/* 已授权的公共数据资源信息区 */}
        <ProForm.Group title="已授权的公共数据资源信息区">
          <ProFormRadio.Group
            label="登记完成情况"
            name="registrationStatus"
            options={[
              { label: '已登记', value: '1' },
              { label: '拟登记', value: '0' }
            ]}
            rules={[{ required: true, message: '请选择登记完成情况' }]}
          />
          <ProFormText
            label="产品和服务名称"
            name="productName"
            placeholder="请输入产品和服务名称"
            rules={[{ required: true, message: '请输入产品和服务名称' }]}
          />
          <ProFormText
            label="登记确认单编号"
            name="registerConfirmNo"
            placeholder="请输入登记确认单编号"
            rules={[{ required: true, message: '请输入登记确认单编号' }]}
          />
          <ProFormSelect
            label="产品和服务方式"
            name="productServiceWay"
            options={[
              { label: '公共数据资源', value: '1' },
              { label: '私有数据资源', value: '2' },
              { label: '混合数据资源', value: '3' }
            ]}
            placeholder="请选择"
            rules={[{ required: true, message: '请选择产品和服务方式' }]}
          />
          <ProFormRadio.Group
            label="产品和服务的应用场景"
            name="productServiceSceneType"
            options={[
              { label: '公共治理、公益事业', value: '1' },
              { label: '产业发展、行业发展', value: '0' }
            ]}
            rules={[{ required: true, message: '请选择产品和服务的应用场景' }]}
          />
          <ProFormItem
            style={{ width: '100%' }}
            wrapperCol={{
              span: 16,
              offset: 8
            }}
          >
            <ProFormTextArea
              autoSize={{
                minRows: 2,
                maxRows: 4
              }}
              name="productServiceSceneDesc"
              placeholder="请输入"
              rules={[
                {
                  required: true,
                  message: '请输入产品和服务的应用场景'
                }
              ]}
            />
          </ProFormItem>
          <ProFormTextArea
            autoSize={{
              minRows: 2,
              maxRows: 4
            }}
            label="产品和服务的收费标准"
            name="productServiceFee"
            placeholder="请输入"
            rules={[
              {
                required: true,
                message: '请输入产品和服务的收费标准'
              }
            ]}
          />
          {/* 实施机构列表 */}
          <ProFormDependency name={['registrationStatus']}>
            {({ registrationStatus }) => {
              return (
                <ProForm.Item
                  name="implementOrgs"
                  rules={[{ required: true, message: '请添加实施机构' }]}
                >
                  <EditableProTable
                    columns={implementOrgColumns}
                    editable={{
                      type: 'multiple',
                      actionRender: (row, config, defaultDom) => {
                        return [defaultDom.save, defaultDom.cancel]
                      }
                    }}
                    name="implementOrgs"
                    recordCreatorProps={{
                      position: 'bottom',
                      record: () => ({ id: createEditableRowId() })
                    }}
                    rowKey="id"
                    style={{ width: 1200 }}
                  />
                </ProForm.Item>
              )
            }}
          </ProFormDependency>
        </ProForm.Group>
        <ProForm.Group title="数据管理部门信息区">
          <ProForm.Item
            name="dataManagementDepartments"
            rules={[{ required: true, message: '请添加数据管理部门信息' }]}
          >
            <EditableProTable
              columns={dataManagementDepartmentColumns}
              editable={{
                type: 'multiple',
                actionRender: (row, config, defaultDom) => {
                  return [defaultDom.save, defaultDom.cancel]
                }
              }}
              name="dataManagementDepartments"
              recordCreatorProps={{
                position: 'bottom',
                record: () => ({ id: createEditableRowId() })
              }}
              rowKey="id"
              style={{ width: 800 }}
            />
          </ProForm.Item>
        </ProForm.Group>
      </ProForm>
    </PageContainer>
  )
}

export default OperationOrgForm
