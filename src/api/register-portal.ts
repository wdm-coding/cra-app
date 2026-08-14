import { httpService } from '@/utils/services/http'
export const getPolicyList = (params: any) => {
  return httpService.post<any>('/registerApi/register-client/api/unifiedPortal/policyList', params);
};
// 获取行业列表
export function getIndustryList() {
  return httpService.post<any>('/registerApi/register-client/api/common/industry')
}