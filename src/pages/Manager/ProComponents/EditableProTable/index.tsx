import {
  EditableFormInstance,
  EditableProTable,
  ProCard,
  ProColumns,
  ProForm,
  ProFormInstance
} from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef, useState } from 'react'
interface TableDataItem {
  id: string
  name: string
  age: number | null
  email: string
  isSaveed?: boolean
}
interface FormData {
  table: TableDataItem[]
}
const EditableProTableDemo: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<string[]>([])
  const formRef = useRef<ProFormInstance<FormData>>(null)
  const editorFormRef = useRef<EditableFormInstance<TableDataItem>>(null)
  const columns: ProColumns<TableDataItem>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      fieldProps: {
        maxLength: 256
      },
      formItemProps: {
        rules: [{ required: true, message: '请输入邮箱', type: 'email' }]
      },
      tooltip: '请输入邮箱'
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      valueType: 'option',
      render: (text, record, _, action) => [
        <Button
          key="editable"
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
            const tableDataSource = formRef.current?.getFieldValue('table')
            if (tableDataSource) {
              formRef.current?.setFieldValue(
                'table',
                tableDataSource.filter(
                  (item: TableDataItem) => item.id !== record.id
                )
              )
            }
          }}
          type="link"
        >
          删除
        </Button>
      ]
    }
  ]
  return (
    <ProForm<FormData>
      formRef={formRef}
      initialValues={{
        table: []
      }}
    >
      <EditableProTable<TableDataItem>
        columns={columns}
        editable={{
          type: 'multiple',
          editableKeys,
          onChange: (keys: any[]) => {
            setEditableRowKeys(keys.map((key) => String(key)))
          },
          onSave: (key, row) => {
            row.isSaveed = true
            return Promise.resolve(row)
          },
          actionRender: (
            row: TableDataItem,
            __: any,
            defaultDom: { save: any; cancel: any }
          ) => {
            return [
              defaultDom.save,
              <Button
                key="cancel"
                onClick={() => {
                  console.log(row)
                  // 判断数据是否保存过，如果没有保存过，直接删除
                  if (!row.isSaveed) {
                    const tableDataSource =
                      formRef.current?.getFieldValue('table')
                    if (tableDataSource) {
                      formRef.current?.setFieldValue(
                        'table',
                        tableDataSource.filter(
                          (item: TableDataItem) => item.id !== row.id
                        )
                      )
                    }
                  }
                  let newKeys = [...editableKeys]
                  newKeys = newKeys.filter((key) => key !== row.id)
                  setEditableRowKeys(newKeys)
                }}
                type="link"
              >
                取消
              </Button>
            ]
          }
        }}
        editableFormRef={editorFormRef}
        headerTitle="可编辑表格"
        name="table"
        recordCreatorProps={{
          position: 'bottom',
          record: () => ({
            id: new Date().getTime().toString(),
            name: '',
            age: null,
            email: ''
          })
        }}
        rowKey="id"
      />
      <ProForm.Item>
        <ProCard collapsible defaultCollapsed headerBordered title="表格数据">
          {editableKeys}
        </ProCard>
      </ProForm.Item>
    </ProForm>
  )
}

export default EditableProTableDemo
