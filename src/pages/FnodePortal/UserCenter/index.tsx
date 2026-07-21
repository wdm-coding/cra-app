import styles from './index.module.less'
import { Button, Form, Upload } from 'antd'
import UploadPicture from './components/UploadPicture'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
const UserCenter = () => {
  // 站点配置
  const siteConfig = {
    tabTitle: '国家数据基础设施（甘肃）区域功能节点',
    favicon: '/xxx/favicon.ico',
    pageTitle: '国家数据基础设施（甘肃）区域功能节点',
    portalLogo: '/xxx/xxx.png',
    registrationInfo: '备案信息',
    homeBanner: [
      {
        id: 1,
        path: '/xxx/xxx.png',
        type: 'img'
      },
      {
        id: 2,
        path: '/xxx/xxx.mp4',
        type: 'video'
      }
    ]
  }
  // 资源概览
  const resourceList = [
    {
      id: 1,
      title: '已注册用户量',
      num: 665,
      detailTitle: '最新注册企业',
      detail: [
        {
          id: 11,
          name: '长沙万为机器人有限公司'
        },
        {
          id: 12,
          name: '新星智凯科技技术有限公司'
        }
      ]
    },
    {
      id: 2,
      title: '已注册业务节点',
      num: 8,
      detailTitle: '已接入平台',
      detail: [
        {
          id: 21,
          name: '甘肃省公共数据授权运营平台'
        },
        {
          id: 22,
          name: '甘肃省公共数据资源目录平台'
        }
      ]
    },
    {
      id: 3,
      title: '已登记数据量',
      num: 113384,
      detailTitle: '登记数据量',
      detail: [
        {
          id: 31,
          name: '数据资源',
          value: 113384
        },
        {
          id: 32,
          name: '数据产品',
          value: 113384
        }
      ]
    }
  ]
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className={styles.userCenterWrapper}>
      <div className={styles.userCenterContent}>
        <Form
          labelCol={{ span: 4 }}
          layout="horizontal"
          onFinish={onFinish}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item label="上传图片" name="uploadImg">
            <UploadPicture />
          </Form.Item>
          <Form.Item label="上传文件" name="uploadFile">
            <Upload action="/upload.do" name="uploadFile">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default UserCenter
