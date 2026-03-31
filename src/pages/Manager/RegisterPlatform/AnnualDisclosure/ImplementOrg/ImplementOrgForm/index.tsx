import {
  EditableProTable,
  PageContainer,
  ProColumns,
  ProForm,
  ProFormDependency,
  ProFormInstance,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components'
import { Button, message } from 'antd'
import { useCallback, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { ImplementOrgItem, authorizedOptItem, dataMngDeptItem } from '../types'
import { addImp } from '@/api/annualDisclosure'
let editableRowIdCounter = 1000000
function createEditableRowId(): string {
  editableRowIdCounter += 1
  return String(editableRowIdCounter)
}
const ImplementOrgForm: React.FC = () => {
  const navigator = useNavigate()
  const location = useLocation()
  const record = location.state as ImplementOrgItem | undefined
  console.log(record)
  // 回显表单数据
  const initialValues = useCallback(async () => {
    // if (!record) return
    // const { id } = record || {}
    // 获取详情
    const res = {
      // id,
      implementOrgName: '酒泉大数据中心',
      creditCode: '910254542324552112',
      address: '甘肃省酒泉市酒泉区730025',
      email: 'contact@163.com',
      phone: '13800000000',
      registrationStatus: '1',
      authorizedDataResourceName: '平均工资',
      registrationConfirmationNumber: 'no2552562665489',
      authorizedOperationMethod: '1',
      authorizedOperationFee: '不知道',
      authorizedOperations: [
        {
          id: new Date().getTime().toString(),
          authorizedOperationName: '嘉峪关大数据中心',
          creditCode: '910254542324552112',
          operationTerm: ['2026-03-05', '2026-03-07']
        }
      ],
      dataManagementDepartments: [
        {
          id: new Date().getTime().toString(),
          unitName: '甘肃省城市大数据中心',
          contact: '张三',
          phone: '13800000000'
        }
      ]
    }
    formRef.current?.setFieldsValue(res || {})
  }, [])
  useEffect(() => {
    initialValues()
  }, [initialValues])
  const formRef = useRef<ProFormInstance<any>>(null)
  // 提交表单
  const onSubmit = async (values: any) => {
    const params = {
      ...values
    }
    try {
      const data = await addImp(params)
      if (data) {
        message.success('添加成功')
        formRef.current?.resetFields()
        navigator('/manager/registerPlatform/annualDisclosure/implementOrg')
      } else {
        message.error('添加失败')
      }
    } catch (err) {
      message.error('添加失败')
      throw console.log(err)
    }
  }
  const authorizedOptColumns: ProColumns<authorizedOptItem>[] = [
    {
      title: '已授权的运营机构名称',
      dataIndex: 'authorizedOperationName',
      key: 'authorizedOperationName',
      formItemProps: {
        rules: [{ required: true, message: '请输入已授权的运营机构名称' }]
      }
    },
    {
      title: '统一社会信用代码',
      dataIndex: 'creditCode',
      key: 'creditCode',
      formItemProps: {
        rules: [{ required: true, message: '请输入统一社会信用代码' }]
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
        return record.operationTerm?.join('至') || ''
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
            action?.startEditable?.(record.id!, record)
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
  const authorizedOptList: authorizedOptItem[] = []
  const dataMngDeptColumns: ProColumns<dataMngDeptItem>[] = [
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
            action?.startEditable?.(record.id!, record)
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
  const dataMngDeptList: dataMngDeptItem[] = []
  return (
    <PageContainer breadcrumbRender={false} title="信息维护">
      <ProForm
        colProps={{
          span: 24
        }}
        dateFormatter={(value) => value.format('YYYY-MM-DD')}
        formRef={formRef}
        grid
        initialValues={{
          authorizedOperations: authorizedOptList,
          dataManagementDepartments: dataMngDeptList
        }}
        labelCol={{
          span: 8
        }}
        labelWrap={true}
        layout="horizontal"
        onFinish={onSubmit}
        style={{ width: 1000 }}
        wrapperCol={{
          span: 16
        }}
      >
        {/* 实施机构基础信息区 */}
        <ProForm.Group title="实施机构基础信息区">
          <ProFormText
            fieldProps={{
              maxLength: 128
            }}
            label="实施机构名称"
            name="implementOrgName"
            placeholder="请输入内容"
            rules={[{ required: true, message: '请输入实施机构名称' }]}
            tooltip="县级以上地方各级人民政府或国家行业主管部门结合授权模式确定的、具体负责组织开展授权运营活动的单位全称。示例：XX省XX市大数据管理中心"
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
            rules={[{ required: true, message: '请输入地址', type: 'email' }]}
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
        {/* 公共数据资源授权信息区 */}
        <ProForm.Group title="公共数据资源授权信息区">
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
            label="已授权公共数据资源名称"
            name="authorizedDataResourceName"
            placeholder="请输入内容"
            rules={[
              { required: true, message: '请输入已授权公共数据资源名称' },
              //名称 唯一性校验
              () => ({
                validator: (_, value: string) => {
                  if (value === '2') {
                    return Promise.reject('名称已存在')
                  }
                  return Promise.resolve()
                }
              })
            ]}
            validateTrigger="onBlur"
          />
          <ProFormText
            label="登记确认单编号"
            name="registrationConfirmationNumber"
            placeholder="请输入内容"
            rules={[{ required: true, message: '请输入登记确认单编号' }]}
          />
          <ProFormSelect
            label="授权运营方式"
            name="authorizedOperationMethod"
            options={[
              { label: '方式1', value: '1' },
              { label: '方式2', value: '2' },
              { label: '方式3', value: '3' }
            ]}
            placeholder="请选择"
            rules={[{ required: true, message: '请选择授权运营方式' }]}
          />
          <ProFormTextArea
            autoSize={{
              minRows: 2,
              maxRows: 4
            }}
            label="已授权的公共数据资源运营服务上收费标准"
            name="authorizedOperationFee"
            placeholder="请输入"
            rules={[
              {
                required: true,
                message: '请输入已授权的公共数据资源运营服务上收费标准'
              }
            ]}
          />
          {/* 已授权的运营机构列表 */}
          <ProFormDependency
            name={['registrationStatus']}
            style={{ width: '100%' }}
          >
            {({ registrationStatus }) => {
              return (
                <ProForm.Item
                  name="authorizedOperations"
                  rules={[
                    { required: true, message: '请添加已授权的运营机构' }
                  ]}
                >
                  <EditableProTable
                    columns={authorizedOptColumns}
                    editable={{
                      type: 'multiple',
                      actionRender: (row, config, defaultDom) => {
                        return [defaultDom.save, defaultDom.cancel]
                      }
                    }}
                    name="authorizedOperations"
                    recordCreatorProps={{
                      position: 'bottom',
                      record: () => ({ id: createEditableRowId() })
                    }}
                    rowKey="id"
                    style={{ width: 1000 }}
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
              columns={dataMngDeptColumns}
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
              style={{ width: 1000 }}
            />
          </ProForm.Item>
        </ProForm.Group>
      </ProForm>
    </PageContainer>
  )
}

export default ImplementOrgForm
