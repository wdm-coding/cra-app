import { httpService } from '@/utils/services/http'
export const getPolicyList = (params: any) => {
  return httpService.post<any>('/registerApi/register-client/api/unifiedPortal/policyList', params);
};