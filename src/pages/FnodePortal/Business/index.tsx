import SearchBanner from '../component/SearchBanner'
import bannerBg from '@/assets/images/portalImg/business-banner.png'
import SelectType from '../component/SelectType'
import { useState } from 'react'

const FnodePortalBusiness = () => {
  const [activeKey, setActiveKey] = useState<string>('all')
  return (
    <div>
      <SearchBanner
        bannerBg={bannerBg}
        countNum={25152}
        onClear={() => {
          console.log('业务节点-清除')
        }}
        onSearch={(value) => {
          console.log('业务节点-搜索', value)
        }}
        title="业务节点"
      />
      <SelectType activeKey={activeKey} items={[
          {
            key: 'all',
            label: '不限'
          },
          {
            key: 'imp',
            label: '实施机构'
          },
          {
            key: 'opt',
            label: '运营机构'
          },
          {
            key: 'opt1',
            label: '运营机构1'
          },
          {
            key: 'opt2',
            label: '运营机构2'
          },
          {
            key: 'opt3',
            label: '运营机构3'
          },
          {
            key: 'opt4',
            label: '运营机构4'
          },
          {
            key: 'opt5',
            label: '运营机构5运营机构5运营机构5运营机构5运营机构5'
          },
          {
            key: 'opt6',
            label: '运营机构6'
          },
          {
            key: 'opt7',
            label: '运营机构7'
          },
        ]}
        onChange={(key) => {
          console.log('业务功能类型-选择', key)
          setActiveKey(key)
        }}
        title="业务功能类型"
      />
    </div>
  )
}

export default FnodePortalBusiness
