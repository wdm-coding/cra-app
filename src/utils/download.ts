// 文件后缀名到 MIME 类型的映射表
const MIME_TYPES: Record<string, string> = {
  // 文本文件
  'txt': 'text/plain',
  'html': 'text/html',
  'htm': 'text/html',
  'css': 'text/css',
  'js': 'text/javascript',
  'json': 'application/json',
  'xml': 'application/xml',
  'csv': 'text/csv',

  // 图片文件
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'bmp': 'image/bmp',
  'webp': 'image/webp',
  'svg': 'image/svg+xml',
  'ico': 'image/x-icon',
  'tiff': 'image/tiff',
  'tif': 'image/tiff',

  // 音频文件
  'mp3': 'audio/mpeg',
  'wav': 'audio/wav',
  'ogg': 'audio/ogg',
  'oga': 'audio/ogg',
  'm4a': 'audio/mp4',
  'aac': 'audio/aac',
  'flac': 'audio/flac',
  'wma': 'audio/x-ms-wma',

  // 视频文件
  'mp4': 'video/mp4',
  'avi': 'video/x-msvideo',
  'mov': 'video/quicktime',
  'wmv': 'video/x-ms-wmv',
  'flv': 'video/x-flv',
  'webm': 'video/webm',
  'mkv': 'video/x-matroska',
  'm4v': 'video/x-m4v',
  '3gp': 'video/3gpp',

  // 文档文件
  'pdf': 'application/pdf',
  'doc': 'application/msword',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'xls': 'application/vnd.ms-excel',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'ppt': 'application/vnd.ms-powerpoint',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

  // 压缩文件
  'zip': 'application/zip',
  'rar': 'application/x-rar-compressed',
  '7z': 'application/x-7z-compressed',
  'tar': 'application/x-tar',
  'gz': 'application/gzip',
  'bz2': 'application/x-bzip2',

  // 字体文件
  'ttf': 'font/ttf',
  'otf': 'font/otf',
  'woff': 'font/woff',
  'woff2': 'font/woff2',
  'eot': 'application/vnd.ms-fontobject',

  // 其他
  'exe': 'application/x-msdownload',
  'dmg': 'application/x-apple-diskimage',
  'iso': 'application/x-iso9660-image',
  'apk': 'application/vnd.android.package-archive',
  'ipa': 'application/x-itunes-ipa',

  // 默认类型
  'bin': 'application/octet-stream',
  '': 'application/octet-stream'
}

// 清理 Base64 字符串，使其符合标准格式
const cleanBase64String = (input: string): string | null => {
  try {
    let result = input.trim()
    console.log('清理前长度:', result.length)
    // 步骤 1: 移除 data URL 前缀
    if (result.startsWith('data:')) {
      console.log('检测到 data URL 前缀')
      const match = result.match(/^data:[^;]+;base64,(.+)$/)
      if (match && match[1]) {
        result = match[1]
        console.log('移除 data URL 前缀后长度:', result.length)
      } else {
        // 尝试简单分割
        const parts = result.split('base64,')
        if (parts.length > 1) {
          result = parts[1]
          console.log('简单分割后长度:', result.length)
        }
      }
    }
    // 步骤 2: URL 解码（处理 %2B, %2F, %3D 等）
    if (result.includes('%')) {
      console.log('检测到 URL 编码字符，进行解码')
      try {
        result = decodeURIComponent(result)
        console.log('URL 解码后长度:', result.length)
      } catch (e) {
        console.log('URL 解码失败，继续处理')
      }
    }
    // 步骤 3: 处理可能的编码问题
    // 替换空格为加号（Base64 中的加号可能被转为空格）
    result = result.replace(/ /g, '+')
    // 替换 URL 安全的 Base64 字符
    result = result.replace(/-/g, '+').replace(/_/g, '/')
    // 移除所有空白字符
    result = result.replace(/[\s\n\r\t]/g, '')
    console.log('去除空白后长度:', result.length)
    // 步骤 4: 验证 Base64 格式
    // 更宽松的 Base64 验证（允许 = 填充）
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/
    if (!base64Regex.test(result)) {
      console.error('Base64 格式无效，发现非法字符')
      // 查找非法字符
      for (let i = 0; i < Math.min(result.length, 200); i++) {
        const char = result[i]
        if (!/[A-Za-z0-9+/=]/.test(char)) {
          console.error(`位置 ${i}: 非法字符 '${char}' (ASCII: ${char.charCodeAt(0)})`)
        }
      }
      // 尝试移除非法字符
      const cleaned = result.replace(/[^A-Za-z0-9+/=]/g, '')
      console.log('移除非法字符后长度:', cleaned.length)
      if (cleaned.length > 0) {
        result = cleaned
      } else {
        return null
      }
    }
    // 步骤 5: 补全 = 号
    const paddingNeeded = (4 - (result.length % 4)) % 4
    if (paddingNeeded > 0) {
      result += '='.repeat(paddingNeeded)
      console.log('补全 = 号后长度:', result.length)
    }
    console.log('最终清理后长度:', result.length)
    return result
  } catch (error) {
    console.error('清理 Base64 时出错:', error)
    return null
  }
}

// 获取 MIME 类型
const getMimeType = (filename: string) => {
  const type = filename.split('.').pop()?.toLowerCase() as string
  if (!type) throw new Error('文件名无效')
  return MIME_TYPES[type]
}

// 创建下载链接并触发点击事件
const createLink = (bytes: BlobPart, filename: string) => {
  const type = getMimeType(filename)
  // 创建 Blob
  const blob = new Blob([bytes], { type })
  // 创建下载链接
  const href = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.download = filename
  document.body.appendChild(link)
  link.click()
  URL.revokeObjectURL(href)
  document.body.removeChild(link)
}

// 下载 Base64 编码的文件
export const downloadBase64 = (base64: string, filename: string) => {
  const clearBase64 = cleanBase64String(base64)
  if (!clearBase64) {
    throw new Error('无效的 Base64 字符串')
  }
  const binaryString = atob(clearBase64)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  createLink(bytes, filename)
}