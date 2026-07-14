// 检查参数是否有效
const isValidSearchParams = (value: any): boolean => {
  return value !== '' && value !== null && value !== undefined
}

// 跟踪搜索事件
export const trackSearchHandler = (
  searchParams: Record<string, string>,
  searchCategory: string,
  searchCount?: number
): void => {
  const paramsKey = Object.keys(searchParams)
  // 如果参数只有 pageNum 和 pageSize
  if (
    paramsKey.length === 2 &&
    paramsKey.includes('pageNum') &&
    paramsKey.includes('pageSize')
  )
    return
  // 筛选出其他参数,切参数有效
  const otherParams = paramsKey.filter(
    (key) =>
      key !== 'pageNum' &&
      key !== 'pageSize' &&
      isValidSearchParams(searchParams[key])
  )
  if (otherParams.length > 0) {
    // 1. 将每个 track 操作包装成 Promise
    const trackPromises = otherParams.map((key) => {
      return new Promise<void>((resolve) => {
        const value = searchParams[key]
        const options = {
          keyword: typeof value === 'object' ? JSON.stringify(value) : value,
          searchCat: searchCategory,
          searchCount: searchCount || 0
        }
        if ((window as any)?.WebAnalytics) {
          ;(window as any)?.WebAnalytics?.trackSiteSearch(options)
        } else {
          ;(window as any)?.trackSearch(
            options.keyword,
            options.searchCat,
            options.searchCount
          )
        }
        resolve()
      })
    })
    // 2. 并发执行所有事件,不关心结果
    Promise.allSettled(trackPromises)
  }
}