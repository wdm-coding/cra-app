import {httpService} from '@/utils/services/http'
export interface ChatParams {
    workflow_id: string;
    stream?: boolean;
    input?: any;
    message_id?: string;
    session_id?: string;
}

export const chatApi = (params: ChatParams) => {
    return httpService.post<any>('/api/v2/workflow/invoke', params, {
        headers: {
            'idss_user_id':'461333370770554880',
            'idss_tenant_id':'1'
        },
    });
};