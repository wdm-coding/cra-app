/**
 * 网站分析追踪脚本 (基于 Matomo)
 * 主要功能：自动初始化追踪器、支持 SPA 路由变化追踪、自动捕获站内搜索事件。
 * @param {Window} window - 全局 window 对象
 * @param {Document} document - 全局 document 对象
 */

// ================= 1. 配置常量 =================
/** Matomo 追踪服务器基础地址 */
const TRACKER_BASE_URL = 'https://insight.ndilab.cn/'

/** 需要被自动追踪搜索行为的 DOM 元素选择器 */
const SEARCH_TRACKER_SELECTOR = '[track-site-search]'

/** 需要监听的事件类型集合 */
const TRACKED_EVENTS = ['submit', 'click', 'keydown', 'search']

/** 允许的搜索分类映射 (用于数据归类) */
const SEARCH_CATEGORIES = {
  DataProduct: 'data-product',
  DataResource: 'data-resource',
  DataServiceNode: 'data-serviceNode',
  DataOthers: 'data-others'
}
const VALID_CATEGORIES_SET = new Set(Object.values(SEARCH_CATEGORIES))

/** 搜索输入框的 CSS 选择器 */
const SEARCH_INPUT_SELECTOR = [
  '[search-keyword]',
  "input[type='search']",
  "input[name='keyword']",
  "input[name='q']",
  "input[name='search']",
  "input[name='query']",
  "textarea[name='keyword']",
  "textarea[name='q']"
].join(',')

/** 通用文本输入框的 CSS 选择器 (用于兜底查找) */
const GENERIC_INPUT_SELECTOR = [
  'input:not([type])',
  "input[type='text']",
  "input[type='search']",
  'textarea',
  "[contenteditable='true']",
  "[role='searchbox']"
].join(',')

/** 搜索提交按钮的 CSS 选择器 */
const SEARCH_SUBMIT_SELECTOR = '[search-submit]'

// ================= 2. 内部状态管理 =================
/** 缓存已绑定事件的 DOM 元素及其事件处理函数 (防止重复绑定) */
const boundElementsCache = new WeakMap()
/** 缓存元素级别的搜索防抖状态 (防止同一元素短时间内触发多次) */
const elementDebounceCache = new WeakMap()
/** 缓存全局搜索防抖状态 (防止不同元素触发相同搜索词) */
const globalSearchDebounceCache = new Map()
/** 记录已动态加载过的脚本 URL，避免重复加载 */
const loadedScriptsSet = new Set()

/** 追踪器是否已初始化 */
let isTrackerInitialized = false
/** SPA 路由监听器是否已绑定 */
let isRouterListenerBound = false
/** 记录当前已追踪的页面 URL，用于判断路由是否发生变化 */
let currentTrackedUrl = ''

// ================= 3. 核心工具函数 =================

/**
 * 动态加载外部 JavaScript 脚本
 * @param {string} scriptUrl - 脚本的 URL 地址
 */
function loadExternalScript(scriptUrl) {
  if (loadedScriptsSet.has(scriptUrl)) return
  loadedScriptsSet.add(scriptUrl)
  const scriptElement = document.createElement('script')
  scriptElement.async = true
  scriptElement.src = scriptUrl
  document.head.appendChild(scriptElement)
}

/**
 * 获取或初始化 Matomo 全局追踪队列 (_paq)
 * @returns {Array} 追踪队列数组
 */
function getTrackerQueue() {
  return (window._paq = window._paq || [])
}

/**
 * 发送页面浏览 (PageView) 追踪数据
 * @param {Object} options - 配置项
 * @param {string} [options.url] - 自定义页面 URL，默认为当前 location.href
 * @param {string} [options.title] - 自定义页面标题，默认为 document.title
 * @returns {boolean} 是否发送成功
 */
function trackPageView(options = {}) {
  if (!isTrackerInitialized) {
    console.warn('[WebAnalyticsInit] please call init first')
    return false
  }
  const pageUrl = options.url || window.location.href
  const pageTitle = options.title || document.title
  const queue = getTrackerQueue()

  queue.push(['setCustomUrl', pageUrl])
  queue.push(['setDocumentTitle', pageTitle])
  queue.push(['trackPageView'])

  currentTrackedUrl = pageUrl
  return true
}

// ================= 4. 初始化与路由监听 =================

/**
 * 绑定 SPA 路由变化监听器
 * 通过劫持 history API 和监听原生事件，实现单页应用的路由追踪
 */
function bindRouterChangeListeners() {
  if (isRouterListenerBound) return
  isRouterListenerBound = true

  const handleRouteChange = () => {
    const newUrl = window.location.href
    if (newUrl !== currentTrackedUrl) {
      trackPageView({ url: newUrl })
    }
  }

  // 劫持 history.pushState 和 replaceState
  const { pushState: originalPushState, replaceState: originalReplaceState } = window.history
  window.history.pushState = function (...args) {
    originalPushState.apply(window.history, args)
    handleRouteChange()
  }
  window.history.replaceState = function (...args) {
    originalReplaceState.apply(window.history, args)
    handleRouteChange()
  }

  // 监听浏览器前进/后退及 Hash 变化
  window.addEventListener('popstate', handleRouteChange)
  window.addEventListener('hashchange', handleRouteChange)
}

/**
 * 初始化 Matomo 追踪器
 * @param {Object} config - 配置项
 * @param {string} config.siteId - 站点 ID
 * @returns {boolean} 是否初始化成功
 */
function initTracker(config) {
  const siteId = config?.siteId
  if (!siteId) {
    console.warn('[WebAnalyticsInit] siteId is required')
    return false
  }

  const queue = getTrackerQueue()
  if (isTrackerInitialized) {
    // 如果已初始化，仅更新 SiteId
    queue.push(['setSiteId', String(siteId)])
  } else {
    // 首次初始化：设置追踪地址、SiteId 并加载 Matomo 核心脚本
    queue.push(['setTrackerUrl', `${TRACKER_BASE_URL}matomo.php`])
    queue.push(['setSiteId', String(siteId)])
    loadExternalScript(`${TRACKER_BASE_URL}matomo.js`)
    isTrackerInitialized = true
    bindRouterChangeListeners()
  }

  // 初始化完成后立即发送一次 PageView
  trackPageView()
  return true
}

/**
 * 从当前 script 标签或全局变量中自动获取 SiteId
 * @returns {string} 站点 ID
 */
function getAutoDetectedSiteId() {
  const currentScript = document.currentScript
  return (
    currentScript?.getAttribute('data-site-id') ||
    currentScript?.getAttribute('data-siteId') ||
    window.WEB_ANALYTICS_SITE_ID ||
    ''
  )
}

/**
 * 自动初始化入口：获取 SiteId 并初始化追踪器
 */
function autoInitialize() {
  const siteId = getAutoDetectedSiteId()
  if (siteId) {
    initTracker({ siteId: String(siteId) })
  }
}

// ================= 5. 搜索追踪业务逻辑 =================

/**
 * 校验搜索分类是否合法
 * @param {string} category - 搜索分类
 * @returns {boolean} 是否合法
 */
function isValidSearchCategory(category) {
  return !!category && VALID_CATEGORIES_SET.has(category)
}

/**
 * 安全地将值转换为有限数字
 * @param {any} value - 待转换的值
 * @returns {number|undefined} 转换后的数字或 undefined
 */
function parseToNumber(value) {
  if (value == null || value === '') return undefined
  const num = Number(value)
  return Number.isFinite(num) ? num : undefined
}

/**
 * 格式化并截断字符串
 * @param {any} text - 原始文本
 * @param {number} maxLength - 最大长度
 * @returns {string} 处理后的字符串
 */
function truncateText(text, maxLength) {
  return String(text || '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, maxLength)
}

/**
 * 检查父节点是否包含子节点 (或两者相等)
 * @param {Node} parent - 父节点
 * @param {Node} child - 子节点
 * @returns {boolean} 是否包含
 */
function isNodeContained(parent, child) {
  return parent === child || parent?.contains(child)
}

/**
 * 打印警告日志
 * @param {string} message - 警告信息
 * @param {any} [detail] - 详细信息
 */
function logWarning(message, detail) {
  console.warn('[WebAnalytics]', message, detail)
}

/**
 * 构建并返回错误结果对象
 * @param {string} reason - 错误原因
 * @param {any} [detail] - 错误详情
 * @returns {Object} 错误结果
 */
function createErrorResult(reason, detail) {
  logWarning(reason, detail)
  return { ok: false, reason, detail }
}

/**
 * 从 DOM 元素上获取搜索分类属性
 * @param {HTMLElement} element - DOM 元素
 * @returns {string} 搜索分类
 */
function getSearchCategory(element) {
  return (
    element.getAttribute('data-search-cat') ||
    element.getAttribute('search-cat') ||
    element.dataset?.searchCat ||
    ''
  )
}

/**
 * 解析 DOM 元素上的搜索追踪配置
 * @param {HTMLElement} element - 带有 [track-site-search] 属性的容器元素
 * @returns {Object} 搜索配置对象
 */
function parseSearchConfig(element) {
  return {
    searchCat: getSearchCategory(element),
    minLength: parseToNumber(element.getAttribute('search-min-length')) ?? 1,
    maxLength: parseToNumber(element.getAttribute('search-max-length')) ?? 100,
    searchCount: parseToNumber(element.getAttribute('search-result-count')),
    autoTrack: element.getAttribute('search-auto-track') !== 'false'
  }
}

/**
 * 在容器内查找实际的搜索输入框
 * @param {HTMLElement} container - 搜索容器
 * @returns {HTMLElement|null} 搜索输入框元素
 */
function findSearchInput(container) {
  // 1. 优先查找通过属性指定的输入框
  const customSelector = container.getAttribute('search-input')
  if (customSelector) return document.querySelector(customSelector)

  // 2. 如果容器本身就是输入框
  if (container.matches?.(SEARCH_INPUT_SELECTOR)) return container

  // 3. 在容器内查找标准搜索输入框
  const standardInput = container.querySelector?.(SEARCH_INPUT_SELECTOR)
  if (standardInput) return standardInput

  // 4. 兜底：查找容器内唯一的通用文本输入框
  const genericInputs = Array.from(
    container.querySelectorAll?.(GENERIC_INPUT_SELECTOR) || []
  ).filter((input) => !input.disabled && input.type !== 'hidden')
  return genericInputs.length === 1 ? genericInputs[0] : null
}

/**
 * 获取输入框当前的值
 * @param {HTMLElement} container - 搜索容器
 * @param {number} maxLength - 最大截断长度
 * @returns {string} 输入值
 */
function extractInputValue(container, maxLength) {
  const inputElement = findSearchInput(container)
  const rawValue =
    inputElement && 'value' in inputElement ? inputElement.value : inputElement?.textContent
  return truncateText(rawValue, maxLength)
}

// ================= 6. 事件触发判断逻辑 =================

/**
 * 判断点击事件是否发生在搜索输入框上
 */
function isClickOnSearchInput(eventTarget, container) {
  return eventTarget?.matches?.(SEARCH_INPUT_SELECTOR) && isNodeContained(container, eventTarget)
}

/**
 * 判断按键事件是否为在搜索框内按下回车键
 */
function isEnterKeyInSearchInput(event, container) {
  return (
    event.key === 'Enter' &&
    !event.isComposing &&
    isNodeContained(container, event.target) &&
    event.target?.matches?.("input, textarea, [contenteditable='true'], [role='searchbox']")
  )
}

/**
 * 判断点击事件是否触发了搜索提交
 */
function isClickOnSubmitButton(event, container) {
  if (!isNodeContained(container, event.target)) return false

  // 1. 检查是否点击了自定义的 [search-submit] 元素
  const customSubmit = event.target.closest?.(SEARCH_SUBMIT_SELECTOR)
  if (customSubmit && isNodeContained(container, customSubmit)) return true

  // 2. 检查是否点击了常规的提交按钮
  const button = event.target.closest?.(
    "button, input[type='button'], input[type='submit'], [role='button']"
  )
  if (!button || !isNodeContained(container, button)) return false

  // 排除重置按钮
  if (button.matches?.("button[type='reset'], input[type='reset']")) return false
  // 明确的提交按钮
  if (button.matches?.("button[type='submit'], input[type='submit']")) return true

  // 3. 模糊匹配：通过按钮的文本或属性判断是否为搜索按钮
  const buttonText = [
    button.getAttribute('aria-label'),
    button.getAttribute('title'),
    button.getAttribute('class'),
    event.target.getAttribute('class'),
    button.textContent
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  // 修复了原代码中的乱码问题
  return /search|query|submit|搜索|查询|查找/.test(buttonText)
}

/**
 * 综合判断当前事件是否应该触发搜索追踪
 * @param {HTMLElement} container - 搜索容器
 * @param {Event} event - 原生事件对象
 * @returns {boolean} 是否触发
 */
function shouldTriggerSearchTracking(container, event) {
  switch (event.type) {
    case 'submit':
      return true
    case 'search':
      return isClickOnSearchInput(event.target, container)
    case 'keydown':
      return isEnterKeyInSearchInput(event, container)
    case 'click':
      return isClickOnSubmitButton(event, container)
    default:
      return false
  }
}

// ================= 7. 防抖与追踪发送 =================

/**
 * 元素级别的防抖检查 (350ms)
 * @param {HTMLElement} element - DOM 元素
 * @param {Object} searchData - 搜索数据
 * @returns {boolean} 是否在防抖时间内
 */
function isElementDebounced(element, searchData) {
  const now = Date.now()
  const cacheKey = [searchData.searchCat, searchData.keyword].join('\n')
  const cached = elementDebounceCache.get(element)

  if (cached?.key === cacheKey && now - cached.time < 350) return true
  elementDebounceCache.set(element, { key: cacheKey, time: now })
  return false
}

/**
 * 全局级别的搜索防抖检查 (350ms)
 * @param {Object} searchData - 搜索数据
 * @returns {boolean} 是否在防抖时间内
 */
function isGlobalSearchDebounced(searchData) {
  const now = Date.now()
  const cacheKey = [searchData.searchCat, searchData.keyword].join('\n')
  const cachedTime = globalSearchDebounceCache.get(cacheKey)

  if (cachedTime && now - cachedTime < 350) return true
  globalSearchDebounceCache.set(cacheKey, now)
  return false
}

/**
 * 向 Matomo 队列推送站内搜索数据
 * @param {string} keyword - 搜索关键词
 * @param {string} category - 搜索分类
 * @param {number} [resultCount] - 搜索结果数量
 */
function pushSiteSearchToTracker(keyword, category, resultCount) {
  const queue = getTrackerQueue()
  if (resultCount !== undefined) {
    queue.push(['trackSiteSearch', keyword, category, resultCount])
  } else {
    queue.push(['trackSiteSearch', keyword, category])
  }
}

/**
 * 执行站内搜索追踪的主逻辑
 * @param {Object} options - 追踪配置
 * @returns {Object} 追踪结果
 */
function trackSiteSearch(options = {}) {
  const category = options.searchCat || options.category || ''
  if (!isValidSearchCategory(category)) {
    return createErrorResult('invalid_search_cat', { searchCat: category })
  }

  const minLength = options.minLength ?? 1
  const keyword = truncateText(options.keyword, options.maxLength ?? 100)
  if (keyword.length < minLength) {
    return createErrorResult('keyword_missing')
  }

  const searchData = {
    keyword,
    searchCat: category,
    searchCount: parseToNumber(options.searchCount)
  }

  // 全局防抖检查
  if (isGlobalSearchDebounced(searchData)) {
    return { ok: false, reason: 'duplicate', detail: searchData }
  }

  pushSiteSearchToTracker(keyword, category, searchData.searchCount)
  return { ok: true, detail: searchData }
}

// ================= 8. DOM 绑定与 MutationObserver =================

/**
 * 为指定的搜索容器绑定事件监听器
 * @param {HTMLElement} element - 带有 [track-site-search] 属性的元素
 */
function bindSearchTracker(element) {
  if (!element || boundElementsCache.has(element)) return

  const configuredCategory = getSearchCategory(element)
  if (!isValidSearchCategory(configuredCategory)) {
    logWarning('invalid_search_cat_skip_bind', { searchCat: configuredCategory, element })
    return
  }

  // 统一的事件处理函数
  const eventHandler = (nativeEvent) => {
    if (!shouldTriggerSearchTracking(element, nativeEvent)) return

    const config = parseSearchConfig(element)
    const activeCategory = isValidSearchCategory(config.searchCat)
      ? config.searchCat
      : configuredCategory
    const keyword = extractInputValue(element, config.maxLength)

    // 长度校验
    if (keyword.length < config.minLength) return

    const trackingData = {
      keyword,
      searchCat: activeCategory,
      searchCount: config.searchCount,
      originalEvent: nativeEvent
    }

    // 元素级防抖
    if (isElementDebounced(element, trackingData)) return

    // 派发自定义事件，允许业务层拦截
    const customEvent = new CustomEvent('web-analytics:site-search', {
      detail: trackingData,
      bubbles: true,
      cancelable: true
    })
    const isAllowed = element.dispatchEvent(customEvent)

    // 如果业务层阻止了默认行为，则取消原生事件
    if (!isAllowed && nativeEvent.cancelable) {
      nativeEvent.preventDefault()
    }

    // 如果允许追踪且开启了自动追踪，则执行上报
    if (isAllowed && config.autoTrack) {
      trackSiteSearch({
        keyword: trackingData.keyword,
        searchCat: trackingData.searchCat,
        searchCount: trackingData.searchCount
      })
    }
  }

  // 绑定所有配置的事件类型 (使用捕获阶段)
  TRACKED_EVENTS.forEach((eventType) => {
    element.addEventListener(eventType, eventHandler, true)
  })

  // 缓存绑定关系
  boundElementsCache.set(element, eventHandler)
}
