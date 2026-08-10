import { Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { uploadFile } from '@/api/function-portal'
import { useEffect, useRef, useState } from 'react'
type Props = {
  maxCount?: number
  value?: any[]
  onChange?: (value: any[]) => void
}
const UploadPicture = ({ maxCount = 5, value = [], onChange }: Props) => {
  console.log(value)
  // 用于标记是否是内部上传引起的 value 变化
  const isInternalChange = useRef(false)
  const [fileList, setFileList] = useState<any[]>([])
  const customRequest = async ({ file, onSuccess }: any) => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await uploadFile(formData)
      if (res && res.data) {
        const newValues = [...value, res.data]
        isInternalChange.current = true
        onSuccess({ url: res.data })
        onChange?.(newValues)
      }
    } catch (err) {
      message.error('上传失败')
    }
  }
  const handleChange = (info: any) => {
    console.log(info)
    if(info.file.status === "removed"){
      const newValues = value.filter((item: any) => item !== info.file.response.url)   
      isInternalChange.current = true 
      onChange?.(newValues)
    }
    setFileList(info.fileList)
  }
  useEffect(() => {
    if (isInternalChange.current) {
      isInternalChange.current = false
      return
    }
    setFileList(value.map((item: any) => ({ url: `https://gansu-ndi.com/fportal/file/${item}`,status: 'done',response: { url: item } })))
  }, [value])
  return (
    <Upload
      customRequest={customRequest}
      fileList={fileList}
      listType="picture-card"
      maxCount={maxCount}
      name="uploadImg"
      onChange={handleChange}
    >
      {value.length >= maxCount ? null : (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      )}
    </Upload>
  )
}

export default UploadPicture
