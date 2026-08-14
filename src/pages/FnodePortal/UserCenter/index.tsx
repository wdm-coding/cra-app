import styles from './index.module.less'
import { ProForm, ProFormText, ProFormTreeSelect } from '@ant-design/pro-components'
import industryList from './data'
import { useEffect, useMemo, useRef, useState } from 'react'
// 转换树结构，添加key、value、title、selectable、isLeaf、disabled属性
const transformTree = (tree: any[]) => {
  return tree.map((item: any) => {
    if (item.children) {
      item.children = transformTree(item.children)
    }
    return {
      ...item,
      key: item.industryId,
      value: item.industryId,
      title: item.name,
      selectable: !item.children || item.children.length === 0,
      isLeaf: !item.children || item.children.length === 0,
      disabled: false
    }
  })
}
// 将所有数据 存储在map中，方便后续使用
const industryMap = new Map()
const setIndustryMap = (industryList: any[]) => {
  industryList.forEach((item) => {
    const ind: any = {
      name: item.name,
      industryId: item.industryId,
      levelType: item.levelType
    }
    if (item.parentId) {
      ind.parentId = item.parentId
    }
    industryMap.set(item.industryId, ind)
    if (item.children && item.children.length > 0) {
      setIndustryMap(item.children)
    }
  })
}
setIndustryMap(industryList)
// 递归设置disabled属性
const setDisabled = (list: any[], bool: boolean): any[] => {
  return list.map((item: any) => ({
    ...item,
    disabled: bool,
    children: (item.children && item.children.length > 0) ? setDisabled(item.children, bool) : []
  }))
}
// 递归查找展开的key
const findExpandedKeys = (keys:any[],industryMap: Map<string, any>) => {
  const result:any[] = []
  keys.forEach((key) => {
    const industry = industryMap.get(key)
    result.push(industry.parentId)
  })
  return result
}
// 寻找选中的行业，直到找到levelType为1的行业
const changeTreeData = (targetKey: string,industryMap: Map<string, any>,originTreeData: any[]) => {
  let secondIndustry = industryMap.get(targetKey)
  while (secondIndustry && secondIndustry.levelType !== 1) {
    secondIndustry = industryMap.get(secondIndustry.parentId)
  }
  const newTreeData = originTreeData.map((item: any) => {
    return {
      ...item,
      disabled: item.industryId !== secondIndustry.parentId,
      children: item.industryId !== secondIndustry.parentId ? setDisabled(item.children, true) : item.children.map((child: any) => {
        return {
          ...child,
          disabled: child.industryId !== secondIndustry.industryId,
          children: child.industryId !== secondIndustry.industryId ? setDisabled(child.children, true) : child.children
        }
      })
    }
  })
  return {newTreeData,secondIndustry}
}
// 组装选中的行业路径数据
const assembleSelectedIndustry = (value: any,industryMap: Map<string, any>) => {
  // 过滤出所有3级行业
  const leafIndustry:any[] = []
  value.forEach((key: string) => {
    const industry = industryMap.get(key)
    if(industry.levelType === 3){
      leafIndustry.push(industry)
    }
  })
  // 使用set去重获取所有父行业id
  const parentidsArray = Array.from(new Set(leafIndustry.map((item: any) => item.parentId)))
  // 递归查找父行业
  const parentIndustry = parentidsArray.map((item: any) => industryMap.get(item))
  // 将leafIndustry 放在对应父行业children中
  const result:any[] = parentIndustry.map((item: any) => ({
    ...item,
    children: leafIndustry.filter((child: any) => child.parentId === item.industryId)
  }))
  return result
}
const UserCenter = () => {
  const formRef = useRef<any>(null)
  // 行业分类树
  const [treeData, setTreeData] = useState(transformTree(industryList))
  // 选中的行业
  const [selectedIndustry, setSelectedIndustry] = useState<any[]>([])
  // 树展开的key
  const [treeExpandedKeys, setTreeExpandedKeys] = useState<any[]>([])
  const onTreeSelectChange = (value: any, label: any, extra: any) => {
    if (value.length === 0) {
      formRef.current?.setFieldsValue({
        dataRegisterNameIndustry: ''
      })
      setSelectedIndustry([])
      setTreeData(transformTree(industryList))
    } else {
      const target = value[value.length - 1]
      const originTreeData = transformTree(industryList)
      const {newTreeData,secondIndustry} = changeTreeData(target,industryMap,originTreeData)
      formRef.current?.setFieldsValue({
        dataRegisterNameIndustry: secondIndustry.name
      })
      const industryChildren = assembleSelectedIndustry(value,industryMap)
      setSelectedIndustry([{
        ...secondIndustry,
        children: industryChildren
      }])
      setTreeData(newTreeData)
    }
  }
  useEffect(() => {
    const fullValue = ['0111','0121']
    const target = fullValue[fullValue.length - 1]
    const originTreeData = transformTree(industryList)
    const {newTreeData,secondIndustry} = changeTreeData(target,industryMap,originTreeData) 
    setTreeData(newTreeData)
    formRef.current?.setFieldsValue({
      industry: fullValue,
      dataRegisterNameIndustry: secondIndustry.name || ''
    })
    setTreeExpandedKeys(findExpandedKeys(fullValue,industryMap))
  }, [formRef])
  useEffect(() => {
    console.log('selectedIndustry',selectedIndustry)
  }, [selectedIndustry])
  return (
    <div className={styles.userCenterWrapper}>
      <div className={styles.userCenterContent}>
        <ProForm formRef={formRef}>
          <ProFormTreeSelect
            fieldProps={{
              showSearch: true,
              allowClear: true,
              autoClearSearchValue: true,
              treeNodeFilterProp: 'title',
              treeData: treeData,
              multiple: true,
              treeDefaultExpandedKeys: treeExpandedKeys,
              fieldNames: {
                label: 'title'
              },
              onChange: (value, label, extra) => {
                onTreeSelectChange(value, label, extra)
              }
            }}
            name="industry"
            placeholder="请选择"
            width={330}
          />
          <ProFormText
            label="行业名称"
            name="dataRegisterNameIndustry"
            placeholder="请输入行业名称"
            required
            rules={[{ required: true, message: '此项为必填项' }]}
            tooltip="最长 24 个字符"
            width="md"
          />
        </ProForm>
      </div>
    </div>
  )
}
export default UserCenter
