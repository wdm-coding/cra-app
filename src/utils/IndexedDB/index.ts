
interface StoreSchema {
  name: string
  keyPath?: string
  autoIncrement?: boolean
  indexes?: Array<{
    name: string
    keyPath: string | string[]
    unique?: boolean
    multiEntry?: boolean
  }>
}

interface IndexedDBConfig {
  dbName: string
  version?: number
  stores: StoreSchema[]
}
// 辅助类型
interface StoreInfo {
  keyPath: string
  autoIncrement: boolean
}

interface DatabaseInfo {
  name: string
  version: number
  objectStoreNames: string[]
  stores: Array<{ name: string } & StoreInfo>
}
class IndexedDB<T = any> {
  private dbName: string
  private version: number
  private db: IDBDatabase | null = null
  private isOpening: boolean = false
  private openingPromise: Promise<IDBDatabase> | null = null
  private stores: Map<string, StoreInfo> = new Map()
  constructor(dbName: string, version: number = 1) {
    this.dbName = dbName
    this.version = version
    this.db = null
  }
  // 打开数据库
  public open(stores: StoreSchema[]): Promise<IDBDatabase> {
    // 如果正在打开，返回同一个 promise
    if (this.isOpening && this.openingPromise) {
      console.log('数据库正在打开，返回现有的打开请求')
      return this.openingPromise
    }
    console.log('正在打开数据库...')
    this.isOpening = true
    this.openingPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version)
      // 打开数据库失败
      request.onerror = event => {
        this.isOpening = false
        reject(`打开数据库失败: ${(event.target as IDBRequest).error}`)
      }

      // 数据库连接阻塞
      request.onblocked = () => {
        console.warn('数据库被其他连接阻塞，请关闭其他标签页')
      }

      // 数据库打开成功或升级
      request.onsuccess = () => {
        console.log('数据库打开成功')
        this.db = request.result
        this.isOpening = false
        // 监听版本变化
        this.db.onversionchange = () => {
          this.db?.close()
          console.log('数据库版本已变更，请刷新页面')
        }
        resolve(this.db)
      }
      // 监听数据库升级事件，创建对象仓库和索引
      request.onupgradeneeded = event => {
        console.log('数据库升级中...')
        const db = (event.target as IDBOpenDBRequest).result
        const transaction = (event.target as IDBOpenDBRequest).transaction
        if (!transaction) {
          reject(new Error('数据库升级事务创建失败'))
          return
        }
        // 创建或更新对象存储
        stores.forEach(store => {
          let objectStore: IDBObjectStore
          // 如果对象存储不存在，则创建
          if (!db.objectStoreNames.contains(store.name)) {
            objectStore = db.createObjectStore(store.name, {
              keyPath: store.keyPath || 'id',
              autoIncrement: store.autoIncrement ?? true
            })
            // 记录存储信息
            this.stores.set(store.name, {
              keyPath: store.keyPath || 'id',
              autoIncrement: store.autoIncrement ?? true
            })
          } else {
            objectStore = transaction.objectStore(store.name)
          }
          // 创建或更新索引
          if (store.indexes) {
            store.indexes.forEach(index => {
              try {
                if (!objectStore.indexNames.contains(index.name)) {
                  objectStore.createIndex(
                    index.name,
                    index.keyPath,
                    index
                  )
                }
              } catch (error) {
                console.warn(`创建索引 ${index.name} 失败:`, error)
              }
            })
          }
        })
      }
    })
    return this.openingPromise
  }

  // 添加数据
  async add<K extends keyof T>(
    storeName: K,
    data: T[K]
  ): Promise<IDBValidKey> {
    await this.ensureConnection()
    return new Promise<IDBValidKey>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readwrite')
      const store = transaction.objectStore(storeName as string)
      const request = store.add(data)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  // 获取数据
  async get<K extends keyof T, R = T[K]>(
    storeName: K,
    key: IDBValidKey
  ): Promise<R | undefined> {
    await this.ensureConnection()
    return new Promise<R | undefined>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readonly')
      const store = transaction.objectStore(storeName as string)
      const request = store.get(key)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }
  // 获取所有数据
  async getAll<K extends keyof T, R = T[K]>(
    storeName: K,
    query?: IDBKeyRange,
    count?: number
  ): Promise<R[]> {
    await this.ensureConnection()
    return new Promise<R[]>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readonly')
      const store = transaction.objectStore(storeName as string)
      const request = count ? store.getAll(query, count) : store.getAll(query)
      request.onsuccess = () => resolve(request.result || [])
      request.onerror = () => reject(request.error)
    })
  }
  // 通过索引获取数据
  async getByIndex<K extends keyof T, R = T[K]>(
    storeName: K,
    indexName: string,
    value: IDBValidKey | IDBKeyRange
  ): Promise<R[]> {
    await this.ensureConnection()

    return new Promise<R[]>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readonly')
      const store = transaction.objectStore(storeName as string)
      const index = store.index(indexName)
      const request = index.getAll(value)

      request.onsuccess = () => resolve(request.result || [])
      request.onerror = () => reject(request.error)
    })
  }
  // 更新数据
  async put<K extends keyof T>(
    storeName: K,
    data: T[K]
  ): Promise<IDBValidKey> {
    await this.ensureConnection()

    return new Promise<IDBValidKey>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readwrite')
      const store = transaction.objectStore(storeName as string)
      const request = store.put(data)

      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }
  // 删除数据
  async delete<K extends keyof T>(
    storeName: K,
    key: IDBValidKey
  ): Promise<void> {
    await this.ensureConnection()
    return new Promise<void>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readwrite')
      const store = transaction.objectStore(storeName as string)
      const request = store.delete(key)
      request.onsuccess = () => {
        console.log('删除数据成功')
        resolve()
      }
      request.onerror = () => reject(request.error)
    })
  }
  // 清空对象仓库
  async clear<K extends keyof T>(storeName: K): Promise<void> {
    await this.ensureConnection()

    return new Promise<void>((resolve, reject) => {
      const transaction = this.db!.transaction(storeName as string, 'readwrite')
      const store = transaction.objectStore(storeName as string)
      const request = store.clear()

      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
  }
  // 删除对象仓库
  static async deleteDatabase(dbName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.deleteDatabase(dbName)
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
  }
  // 检查数据库是否存在
  static async databaseExists(dbName: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const request = indexedDB.open(dbName, 1)
      request.onupgradeneeded = () => {
        request.transaction?.abort()
        indexedDB.deleteDatabase(dbName)
        resolve(false)
      }
      request.onsuccess = () => {
        request.result.close()
        resolve(true)
      }

      request.onerror = () => resolve(false)
    })
  }
  // 关闭数据库连接
  close(): void {
    console.log('关闭数据库连接...')
    if (this.db) {
      this.db.close()
      this.db = null
    }
  }
  // 获取数据库信息
  getDatabaseInfo(): DatabaseInfo {
    if (!this.db) {
      throw new Error('数据库未连接，请先调用 open 方法')
    }
    return {
      name: this.db.name,
      version: this.db.version,
      objectStoreNames: Array.from(this.db.objectStoreNames),
      stores: Array.from(this.stores.entries()).map(([name, info]) => ({
        name,
        ...info
      }))
    }
  }
  // 确保数据库连接已建立
  private async ensureConnection(): Promise<void> {
    console.log('确保数据库连接已建立...')
    if (!this.db) {
      throw new Error('数据库未连接，请先调用 open 方法')
    }
  }
}



export default IndexedDB