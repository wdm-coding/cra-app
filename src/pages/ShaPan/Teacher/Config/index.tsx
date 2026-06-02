import { ProForm, ProFormText, ProFormDigit } from '@ant-design/pro-components';
import type { ProFormInstance } from '@ant-design/pro-components';
import { Card  } from 'antd';
import { useRef } from 'react';

const Config = () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >(null);
  const onFinish = async (values: any) => {
    console.log(values);
    const loanList = generateLoanCustomer(values);
    const insuranceList = generateInsuranceCustomer(values);
    const fundList = generateFundCustomer(values);
    const customerList = [...loanList, ...insuranceList, ...fundList];
    console.log(customerList);
  };
  // 计算三大产品客群占比
  const calculateMarketCustomerCountRatio = (formValues:any) => {
    const { marketCustomerCount, marketCustomerCountLoanRatio, marketCustomerCountInsuranceRatio, marketCustomerCountFundRatio } = formValues;
    console.log('marketCustomerCount',marketCustomerCount);
    const marketCustomerCountLoan = marketCustomerCount * marketCustomerCountLoanRatio;
    const marketCustomerCountInsurance = marketCustomerCount * marketCustomerCountInsuranceRatio;
    const marketCustomerCountFund = marketCustomerCount * marketCustomerCountFundRatio;
    return {
      marketCustomerCountLoan,
      marketCustomerCountInsurance,
      marketCustomerCountFund,
    };
  };
  const randomByRatio = (list:any[]) => {
    const totalWeight = list.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    for (const item of list) {
      random -= item.weight;
      if (random <= 0) {
        return item.value;
      }
    }
    return list[list.length - 1].value;
  }
  // 生成随机信用等级
  const randomCreditLevel = (values:any) => {
    const { creditLevelARatio, creditLevelBRatio, creditLevelCRatio, creditLevelDRatio } = values;
    const creditLevelList = [
      { value: 'A', weight: creditLevelARatio },
      { value: 'B', weight: creditLevelBRatio },
      { value: 'C', weight: creditLevelCRatio },
      { value: 'D', weight: creditLevelDRatio },
    ];
    return randomByRatio(creditLevelList);
  }
  // 生成随机信用分数
  const randomCreditScore = (creditLevel:string) => {
    const creditScoreRanges: Record<string, [number, number]> = {
      A: [650, 850],
      B: [550, 649],
      C: [450, 549],
      D: [350, 449],
    };
    const [min, max] = creditScoreRanges[creditLevel] || [5000, 15000];
    return Math.floor(Math.random() * (max - min) + min);
  }
  // 生成随机收入等级
  const randomIncomeLevel = (values:any) => {
    const { incomeRatioLow, incomeRatioMedium, incomeRatioHigh } = values;
    const incomeLevelList = [
      { value: 'low', weight: incomeRatioLow },
      { value: 'medium', weight: incomeRatioMedium },
      { value: 'high', weight: incomeRatioHigh },
    ];
    return randomByRatio(incomeLevelList);
  }
  // 生成随机收入
  const getRealIncome = (incomeLevel:string) => {
    const incomeRanges: Record<string, [number, number]> = {
      low: [3000, 10000],
      medium: [10000, 20000],
      high: [20000, 50000],
    };
    const [min, max] = incomeRanges[incomeLevel] || [5000, 15000];
    return Math.floor(Math.random() * (max - min) + min);
  }
  // 生成随机贷款类型
  const randomLoanType = (values:any) => {
    const { loanPersonalRatio, loanCarRatio, loanHouseRatio, loanSmallBusinessRatio, loanEnterpriseRatio } = values;
    const loanTypeList = [
      { value: 'personal', weight: loanPersonalRatio },
      { value: 'car', weight: loanCarRatio },
      { value: 'house', weight: loanHouseRatio },
      { value: 'smallBusiness', weight: loanSmallBusinessRatio },
      { value: 'enterprise', weight: loanEnterpriseRatio },
    ];
    return randomByRatio(loanTypeList);
  }
  // 生成随机数id
  const generateCustomerId = () => {
    return Math.random().toString(36).substring(2, 10);
  }
  // 随机保险类型
  const randomInsType = (values:any) => {
    const { insurancePropertyRatio, insuranceLifeRatio } = values;
    const insTypeList = [
      { value: 'insuranceProperty', weight: insurancePropertyRatio },
      { value: 'insuranceLife', weight: insuranceLifeRatio },
    ];
    return randomByRatio(insTypeList);
  }
  // 随机基金类型
  const randomFundType = (values:any) => {
    const { fundPropertyRatio, fundLifeRatio } = values;
    const fundTypeList = [
      { value: 'fundProperty', weight: fundPropertyRatio },
      { value: 'fundLife', weight: fundLifeRatio },
    ];
    return randomByRatio(fundTypeList);
  }
  // 生成贷款意向客户
  const generateLoanCustomer = (values:any) => {
    const {marketCustomerCountLoan} = calculateMarketCustomerCountRatio(values);
    // 随机生成贷款意向客户
    const loanCustomerList = [];
    for (let i = 0; i < marketCustomerCountLoan; i++) {
      const incomeLevel = randomIncomeLevel(values);
      const creditLevel = randomCreditLevel(values);
      loanCustomerList.push({
        customerId:generateCustomerId(),
        type:'loan',
        typeName:'贷款意向客户',
        creditLevel,
        creditScore:randomCreditScore(creditLevel),
        incomeLevel,
        income:getRealIncome(incomeLevel),
        loanType:randomLoanType(values),
        baseBuyProb: Math.round((0.01 + Math.random() * 0.29) * 100) / 100,
        isDeal:0 // 0:未成交 1:已成交
      })
    }
    return loanCustomerList;
  }
  // 生成保险意向客户
  const generateInsuranceCustomer = (values:any) => {
    const {marketCustomerCountInsurance} = calculateMarketCustomerCountRatio(values);
    // 随机生成保险意向客户
    const insuranceCustomerList = [];
    for (let i = 0; i < marketCustomerCountInsurance; i++) {
      const incomeLevel = randomIncomeLevel(values);
      insuranceCustomerList.push({
        customerId:generateCustomerId(),
        type:'insurance',
        typeName:'保险意向客户',
        creditLevel:randomCreditLevel(values),
        incomeLevel,
        income:getRealIncome(incomeLevel),
        insType:randomInsType(values),
        baseBuyProb: Math.round((0.01 + Math.random() * 0.29) * 100) / 100,
        isDeal:0 // 0:未成交 1:已成交
      })
    }
    return insuranceCustomerList;
  }
  // 生成基金意向客户
  const generateFundCustomer = (values:any) => {
    const {marketCustomerCountFund} = calculateMarketCustomerCountRatio(values);
    // 随机生成基金意向客户
    const fundCustomerList = [];
    for (let i = 0; i < marketCustomerCountFund; i++) {
      const incomeLevel = randomIncomeLevel(values);
      fundCustomerList.push({
        customerId:generateCustomerId(),
        type:'fund',
        typeName:'基金意向客户',
        creditLevel:randomCreditLevel(values),
        incomeLevel,
        income:getRealIncome(incomeLevel),
        fundType:randomFundType(values),
        baseBuyProb: Math.round((0.01 + Math.random() * 0.29) * 100) / 100,
        isDeal:0 // 0:未成交 1:已成交
      })
    }
    return fundCustomerList;
  }
  return (
    <div>
      <ProForm
      formRef={formRef}
      initialValues={{
        economicTotalIndex: 1,
        monetaryPolicyCoefficient: 1,
        industryRegulationCoefficient: 1,
        consumerWillingCoefficient: 1,
        capitalMarketPriceCoefficient: 1,
        marketCustomerCount: 50,
        marketCustomerCountLoanRatio: 0.5,
        marketCustomerCountInsuranceRatio: 0.3,
        marketCustomerCountFundRatio: 0.2,
        creditLevelARatio: 0.4,
        creditLevelBRatio: 0.3,
        creditLevelCRatio: 0.2,
        creditLevelDRatio: 0.1,
        incomeRatioLow: 0.5,
        incomeRatioMedium: 0.3,
        incomeRatioHigh: 0.2,
        loanPersonalRatio: 0.4,
        loanCarRatio: 0.2,
        loanHouseRatio: 0.2,
        loanSmallBusinessRatio: 0.1,
        loanEnterpriseRatio: 0.1,
        insurancePropertyRatio: 0.4,
        insuranceAccidentRatio: 0.6,
        fundConservativeRatio: 0.3,
        fundRobustRatio: 0.5,
        fundProgressRatio: 0.2,
      }}
      layout="vertical"
      onFinish={onFinish}
     >
      <Card style={{marginBottom:'15px'}} title="宏观环境参数配置">
        <ProFormDigit  label="经济总体系数" name="economicTotalIndex" />
        <ProFormDigit label="货币政策系数" name="monetaryPolicyCoefficient" />
        <ProFormDigit label="行业监管系数" name="industryRegulationCoefficient" />
        <ProFormDigit label="居民消费意愿系数" name="consumerWillingCoefficient" />
        <ProFormDigit label="资本市场行情系数" name="capitalMarketPriceCoefficient" />
      </Card>
      <Card style={{marginBottom:'15px'}} title="客户基础画像参数配置">
        <ProFormText label="市场总客户基数" name="marketCustomerCount" />
        <ProForm.Group title="三大产品客群占比">
          <ProFormDigit label="贷款意向客户占比" name="marketCustomerCountLoanRatio" />
          <ProFormDigit label="保险意向客户占比" name="marketCustomerCountInsuranceRatio" />
          <ProFormDigit label="基金意向客户占比" name="marketCustomerCountFundRatio" />
        </ProForm.Group>
        <ProForm.Group title="信用等级占比分布">
          <ProFormDigit label="A等级占比" name="creditLevelARatio" />
          <ProFormDigit label="B等级占比" name="creditLevelBRatio" />
          <ProFormDigit label="C等级占比" name="creditLevelCRatio" />
          <ProFormDigit label="D等级占比" name="creditLevelDRatio" />
        </ProForm.Group>
        <ProForm.Group title="收入等级占比分布">
          <ProFormDigit label="低收入占比" name="incomeRatioLow" />
          <ProFormDigit label="中收入占比" name="incomeRatioMedium" />
          <ProFormDigit label="高收入占比" name="incomeRatioHigh" />
        </ProForm.Group>
        <ProForm.Group title="贷款细分偏好配置">
          <ProFormDigit label="个人信用贷占比" name="loanPersonalRatio" />
          <ProFormDigit label="个人汽车消费贷占比" name="loanCarRatio" />
          <ProFormDigit label="个人购房贷占比" name="loanHouseRatio" />
          <ProFormDigit label="小微企业贷占比" name="loanSmallBusinessRatio" />
          <ProFormDigit label="企业创业贷占比" name="loanEnterpriseRatio" />
        </ProForm.Group>
        <ProForm.Group title="保险细分偏好配置">
          <ProFormDigit label="财产险占比" name="insurancePropertyRatio" />
          <ProFormDigit label="意外险占比" name="insuranceAccidentRatio" />
        </ProForm.Group>
        <ProForm.Group title="基金细分偏好配置">
          <ProFormDigit label="保守型占比" name="fundConservativeRatio" />
          <ProFormDigit label="稳健型占比" name="fundRobustRatio" />
          <ProFormDigit label="进取型占比" name="fundProgressRatio" />
        </ProForm.Group>
      </Card>
     </ProForm>
    </div>
  )
}
export default Config