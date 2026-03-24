export interface ImplementOrgSearchForm {
  pageNum?: number,
  pageSize?: number,
  authorizedTime?: string[],
  authorizedDataName?: string,
  operatorName?: string
}

export interface ImplementOrgItem {
  id?: string,
  implementOrgName?: string,
  authorizedDataName?: string,
  operatorName?: string,
  authorizedStartTime?: string,
  authorizedEndTime?: string,
  createTime?: string
}

export interface authorizedOptItem {
  id?: string,
  authorizedOperationName?: string,
  creditCode?: string,
  operationTerm?: string[]
}

export interface dataMngDeptItem {
  id?: string,
  unitName?: string,
  contact?: string,
  phone?: string
}


