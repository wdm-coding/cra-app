import { Upload, Form, Button, UploadFile, UploadProps, Image, GetProp } from 'antd'
import { useState } from 'react'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
const getBase64 = (file: FileType): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

const UploadDemo = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [from] = Form.useForm()
  const onSubmit = async () => {
    from
      .validateFields()
      .then(async (values) => {
        console.log('values', values)
      })
      .catch((err) => {
        console.log('err', err)
      })
      .finally(() => {
        console.log('finally')
      })
  }
  const onReview = () => {
    from.setFieldsValue({
      file: [
        {
          uid: '-1',
          name: '回显图片.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZ.png'
        }
      ]
    })
  }
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList)
  const handlePreview: UploadProps['onPreview'] = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )
  return (
    <div className="w-full bg-white p-[20px] rounded-[10px]">
      <Button onClick={onReview} style={{ marginBottom: 15 }} type="primary">
        回显上传文件
      </Button>
      <Form form={from}>
        <Form.Item
          getValueFromEvent={(e) => e.fileList}
          label="上传文件"
          name="file"
          rules={[{ required: true, message: '请上传文件' }]}
          valuePropName="fileList"
        >
          <Upload action="https://httpbin.org/post" maxCount={1} multiple name="file" onPreview={handlePreview}>
            <Button>上传</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          getValueFromEvent={(e) => e.fileList}
          label="上传图片"
          name="imgFile"
          rules={[{ required: true, message: '请上传图片' }]}
          valuePropName="fileList"
        >
          <Upload
            action="https://httpbin.org/post"
            listType="picture-card"
            maxCount={3}
            multiple
            name="file"
            onChange={handleChange}
            onPreview={handlePreview}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item
          getValueFromEvent={(e) => e.fileList}
          label="上传图片"
          name="circleimgFile"
          rules={[{ required: true, message: '请上传图片' }]}
          valuePropName="fileList"
        >
          <Upload
            action="https://httpbin.org/post"
            listType="picture-circle"
            maxCount={3}
            multiple
            name="file"
            onChange={handleChange}
            onPreview={handlePreview}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item
          getValueFromEvent={(e) => e.fileList}
          label="上传图片"
          name="thumbUrl"
          rules={[{ required: true, message: '请上传图片' }]}
          valuePropName="fileList"
        >
          <Upload
            action="https://httpbin.org/post"
            listType="picture"
            maxCount={3}
            multiple
            name="file"
            onChange={handleChange}
            onPreview={handlePreview}
          >
            <Button icon={<UploadOutlined />} type="primary">
              上传
            </Button>
          </Upload>
        </Form.Item>
        <Button onClick={onSubmit} type="primary">
          提交
        </Button>
      </Form>
      {previewImage && (
        <Image
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible: boolean) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage('')
          }}
          src={previewImage}
          style={{ display: 'none' }}
        />
      )}
    </div>
  )
}

export default UploadDemo
