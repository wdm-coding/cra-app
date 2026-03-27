import { httpService } from '@/utils/services/http'

// 获取实施机构列表
export function getImpList(params: any) {
  return httpService.get('/expressApi/andc/imp/list', params)
}

// 添加实施机构
export function addImp(data: any) {
  return httpService.post('/expressApi/andc/imp/add', data)
}

// 删除实施机构
export function deleteImp(id: string) {
  return httpService.delete(`/expressApi/andc/imp/delete/${id}`)
}

// 获取操作机构列表
export function getOptList(params: any) {
  return httpService.get('/expressApi/andc/opt/list', params)
}

// 添加操作机构
export function addOpt(data: any) {
  return httpService.post('/expressApi/andc/opt/add', data)
}

// 删除操作机构
export function deleteOpt(id: string) {
  return httpService.delete(`/expressApi/andc/opt/delete/${id}`)
}

export function getAnnualDisclosureList(params: any) {
  return new Promise((resolve, reject) => {
    resolve({
      list: [
        {
          id: 1,
          orgName: '实施机构1',
          email: '123@qq.com',
          address: '北京市海淀区',
        },
        {
          id: 2,
          orgName: '操作机构2',
          email: '456@qq.com',
          address: '北京市海淀区',
        },
        {
          id: 3,
          orgName: '操作机构3',
          email: '789@qq.com',
          address: '北京市海淀区',
        }
      ],
      total: 100
    })
  })
}
