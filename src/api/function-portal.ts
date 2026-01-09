import { httpService } from '@/utils/services/http'
// 上传接口
export const uploadApi = () => {
  return '/functionnode-portal-api/api/v1/portal/enterprise/upload'
};
// 获取企业详情信息接口
export const getEnterpriseDetail = () => {
  return httpService.get<any>('/functionApi/functionnode-portal-api/api/v1/portal/enterprise/detail');
};