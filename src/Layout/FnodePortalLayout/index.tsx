import { Outlet } from 'react-router-dom'
import PortalHeader from './component/PortalHeader'
import PortalFooter from './component/PortalFooter'
import { getPortalConfig } from '@/api/function-portal'
import { useEffect, useState } from 'react'
const FnodePortalLayout = () => {
  const [portalConfig, setPortalConfig] = useState<any>({})
  const getApi = async () => {
    const {code,data} = await getPortalConfig()
    if (code === 200) {
      setPortalConfig({
        navMenus: data?.topMenu?.list || [],
        pageTitle: data?.topMenu?.pageTitle || '功能节点门户',
      })
    } else {
      setPortalConfig(null)
    }
  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <div className="w-full flex flex-col relative">
      <PortalHeader {...portalConfig} />
      <div className="w-full min-h-[100vh] bg-[#F5F5F5]">
        <Outlet />
      </div>
      <PortalFooter />
    </div>
  )
}

export default FnodePortalLayout
