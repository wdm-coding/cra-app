import { httpService } from '@/utils/services/http'
// 上传接口
export const uploadApi = () => {
  return '/functionnode-portal-api/api/v1/portal/enterprise/upload'
};
// 获取企业详情信息接口
export const getEnterpriseDetail = () => {
  return httpService.get<any>('/functionApi/functionnode-portal-api/api/v1/portal/enterprise/detail');
};

// 获取门户配置
export const getPortalConfig = () => {
  return httpService.get<any>('/fnodePortalApi/api/v1/portal/page/info');
};

// 获取业务节点-业务功能类型
export const getBusinessFunctionType = () => {
  return httpService.get<any>('/fnodePortalApi/api/v1/portal/dictionary/serviceNodeSearchDictionaryList');
};
// 获取业务节点-列表
export const getBusinessNodeList = (data: any) => {
  return httpService.post<any>('/fnodePortalApi/api/v1/portal/serviceNode/search/page', data);
};
// 获取数据资源-行业分类
export const getIndustryCategory = () => {
  return httpService.get<any>('/fnodePortalApi/api/v1/portal/dictionary/searchDictionaryList');
};
// 获取数据资源-列表
export const getResourceList = (data: any) => {
  return httpService.post<any>('/fnodePortalApi/api/v1/portal/catalog/page', data);
};
// 获取数据产品-产品类型
export const getProductType = () => {
  return httpService.get<any>('/fnodePortalApi/api/v1/portal/dictionary/productSearchDictionaryList');
};
// 获取数据产品-列表
export const getProductList = (data: any) => {
  return httpService.post<any>('/fnodePortalApi/api/v1/portal/product/getProductsByPage', data);
};

// 上传接口
export const uploadFile = (data: any) => {
  return httpService.post<any>('/fnodePortalApi/api/v1/portal/enterprise/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
