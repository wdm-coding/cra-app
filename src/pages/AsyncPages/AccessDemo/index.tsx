import useAccess from '@/hooks/useAccess'
const AccessDemo = () => {
  const access = useAccess()
  return (
    <div>
      {access.canAdd ? <div>新增权限</div> : <div>无新增权限</div>}
      {access.canDelete ? <div>删除权限</div> : <div>无删除权限</div>}
      {access.canUpdate ? <div>更新权限</div> : <div>无更新权限</div>}
    </div>
  )
}

export default AccessDemo
