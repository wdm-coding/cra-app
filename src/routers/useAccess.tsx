import { getPageAuth } from '@/store/modules/userStore'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
const useAccess = () => {
  const { pathname } = useLocation()
  const pageAuth = useSelector(getPageAuth)
  const access: string[] = useMemo(() => {
    const lasterPath = pathname.split('/').pop()
    return pageAuth?.[lasterPath as string] || []
  }, [pathname, pageAuth])
  return {
    canAdd: access.includes('add'),
    canDelete: access.includes('delete'),
    canUpdate: access.includes('update')
  }
}
export default useAccess
