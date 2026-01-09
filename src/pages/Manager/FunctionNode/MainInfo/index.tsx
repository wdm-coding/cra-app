import { getEnterpriseDetail } from '@/api/function-portal'
import { useEffect } from 'react'
const MainInfo = () => {
  const getApi = async () => {
    const res = await getEnterpriseDetail()
    console.log(res)
    // enterpriseRole: "VISITOR"  // 企业角色
  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <div>
      <div>功能节点</div>
    </div>
  )
}

export default MainInfo
