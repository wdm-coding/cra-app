import styles from './index.module.less'
import { Button, Form, FormInstance, Input, Upload } from 'antd'
import UploadPicture from './components/UploadPicture'
import { UploadOutlined } from '@ant-design/icons'
import { useEffect, useRef } from 'react'
import { ProForm, ProFormText } from '@ant-design/pro-components'
const UserCenter = () => {
  // //  1.保存菜单权限分配接口
  // // 入参
  // const params = {
  //   type:'imp', // 实施机构菜单imp，运营机构菜单opt
  //   userIds:'1,2,3,4', // 用户id 逗号分隔的字符串
  // }

  // // 2. 获取菜单权限分配详情
  // // 出参
  // const data = {
  //   impUserIds:[], // 实施机构菜单分配的用户id数组
  //   optUserIds:[], // 运营机构菜单分配的用户id数组
  // }

  // // 3. 登录用户的个人信息返回菜单权限字段
  // // 出参
  // const userInfo = {
  //   menuShow:['imp','opt'],// ['imp'] 只有实施机构菜单权限， ['opt'] 只有运营机构菜单权限， ['imp','opt'] 两个都有
  // }
  const formRef = useRef<FormInstance>(null)
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  useEffect(() => {
    // formRef.current?.setFieldsValue({
    //   uploadImg: []
    // })
  }, [])
  return (
    <div className={styles.userCenterWrapper}>
      <div className={styles.userCenterContent}>
        {/* <Form
          labelCol={{ span: 4 }}
          layout="horizontal"
          onFinish={onFinish}
          ref={formRef}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item htmlFor={undefined} label="姓名" name="name">
            <Input />
          </Form.Item>
          <Form.Item initialValue={[]} label="上传图片" name="uploadImg">
            <UploadPicture />
          </Form.Item>
          <Form.Item htmlFor={undefined} label="上传文件" name="uploadFile">
            <Upload action="/upload.do" name="uploadFile">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
        <ProForm>
          <ProFormText
            dependencies={[['contract', 'name']]}
            label="签约客户名称"
            name="name"
            placeholder="请输入客户名称"
            required
            rules={[{ required: true, message: '此项为必填项' }]}
            tooltip="最长 24 个字符"
            width="md"
          />
          <ProFormText
            dependencies={[['contract', 'name']]}
            htmlFor={null}
            label="签约客户名称"
            name="name1"
            placeholder="请输入客户名称"
            required
            rules={[{ required: true, message: '此项为必填项' }]}
            tooltip="最长 24 个字符"
            width="md"
          />
        </ProForm>
      </div>
    </div>
  )
}
export default UserCenter
