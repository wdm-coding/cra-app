import useAccess from '@/hooks/useAccess'
import { getPolicyList } from '@/api/register-portal'
import { useEffect } from 'react'
const AccessDemo = () => {
  const access = useAccess()
  const getApi = async () => {
    const res = await getPolicyList({
      classificationId: '2006309652731068416',
      pageNum: 1,
      pageSize: 10,
      policyStatus: 0,
      sortDirection: 'ASC',
      sortField: 'sorting',
      title: ''
    })
    console.log(res)
  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <div>
      {access.canAdd ? <div>新增权限</div> : <div>无新增权限</div>}
      {access.canDelete ? <div>删除权限</div> : <div>无删除权限</div>}
      {access.canUpdate ? <div>更新权限</div> : <div>无更新权限</div>}
    </div>
  )
}

export default AccessDemo
