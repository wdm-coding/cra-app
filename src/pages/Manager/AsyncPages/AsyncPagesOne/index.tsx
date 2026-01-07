import { getPolicyList } from '@/api/register-portal'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { downloadBase64 } from '@/utils/download'
const AsyncPagesOne = () => {
  const [content, setContent] = useState<any>()
  const getApi = async () => {
    const { return_code, data } = await getPolicyList({
      classificationId: '2006309652731068416',
      pageNum: 1,
      pageSize: 10,
      policyStatus: 0,
      sortDirection: 'ASC',
      sortField: 'sorting',
      title: ''
    })
    if (return_code === 20000) {
      setContent(data?.content[0])
    }
  }
  useEffect(() => {
    getApi()
  }, [])
  const onDownload = (base64String: string, mimeType: string = 'application/pdf') => {
    const data = JSON.parse(base64String)[0]
    const { base64, fileName } = data
    downloadBase64(base64, fileName)
  }
  return (
    <div>
      <p>下载base64文件</p>
      <p>{content?.title}</p>
      <Button color="cyan" onClick={() => onDownload(content?.attachments)} variant="solid">
        下载
      </Button>
    </div>
  )
}

export default AsyncPagesOne
