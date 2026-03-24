export interface OperationOrgSearchForm {
  pageNum?: number,
  pageSize?: number,
  productName?: string,
  registerConfirmNo?: string,
  productServiceWay?: string,
}

export interface OperationOrgItem {
  id?: string, // 主键
  operatorName?: string,// 运营机构名称
  productName?: string, // 产品和服务名称
  registerConfirmNo?: string, // 登记确认单编号
  productServiceWay?: string, // 产品和服务方式
  createTime?: string // 创建时间
}