import { Upload, message } from 'antd'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
import { uploadFile } from '@/api/function-portal'
type Props = {
  maxCount?: number
  value?: string[]
  onChange?: (value: string[]) => void
}
const UploadPicture = ({ maxCount = 1, value = [], onChange }: Props) => {
  const customRequest = async ({file, onSuccess,onError}: any) => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await uploadFile(formData)
      if (res && res.data) {
        onSuccess({url: res.data})
      }
    } catch (err) {
      onError(err)
      message.error('上传失败')
    }
  }
  const handleChange = (info: any) => {
    console.log('当前文件状态:', info.file.status); 
    if(info.file.status === 'done'){
      const responseUrl = info.file.response?.url;
      const newList = [...value,responseUrl]
      onChange?.(newList)
    }
    if(info.file.status === 'removed'){
      const newList = value.filter(url => url !== info.file.response?.url)
      onChange?.(newList)
    }
  }
    

  return (
    <Upload
      customRequest={customRequest}
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
