import IndexedDB from '@/utils/IndexedDB'
import { createContext, useState, useCallback, useEffect } from 'react'
// 数据库配置信息
const DB_CONFIG = {
  dbName: 'MyAppDB',
  version: 1,
  stores: [
    {
      name: 'users',
      options: { keyPath: 'id', autoIncrement: true },
      indexes: [{ name: 'username', keyPath: 'username', unique: true }]
    }
  ]
}
// 单例实例
let dbInstance: IndexedDB | null = null
// 需要的上下文类型
interface IndexedDBContextType {
  db: IndexedDB | null
  addData: (storeName: string, data: any) => Promise<any>
  getData: (storeName: string, key: string | number) => Promise<any>
  getAllDataByIndex: (storeName: string, indexName: string, indexValue: any) => Promise<any>
  getAllData: (storeName: string) => Promise<any>
  updateData: (storeName: string, data: any) => Promise<any>
  deleteData: (storeName: string, key: string | number) => Promise<any>
  clearStore: (storeName: string) => Promise<any>
  closeDB: () => Promise<void>
  deleteDatabase: (dbName: string) => Promise<void>
}
// 创建上下文对象
const IndexedDBContext = createContext<IndexedDBContextType | null>(null)

const IndexedDBProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [db, setDb] = useState<IndexedDB | null>(dbInstance)
  // 初始化数据库
  useEffect(() => {
    const init = async () => {
      if (!dbInstance) {
        dbInstance = new IndexedDB(DB_CONFIG.dbName, DB_CONFIG.version)
        await dbInstance.open(DB_CONFIG.stores)
        setDb(dbInstance)
      } else {
        setDb(dbInstance)
      }
    }
    init()
  }, [])
  // 添加数据
  const addData = useCallback(
    async (storeName: string, data: any) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.add(storeName, data)
    },
    [db]
  )
  // 获取数据
  const getData = useCallback(
    async (storeName: string, key: string | number) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.get(storeName, key)
    },
    [db]
  )
  // 通过索引获取数据
  const getAllDataByIndex = useCallback(
    async (storeName: string, indexName: string, indexValue: any) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.getByIndex(storeName, indexName, indexValue)
    },
    [db]
  )
  // 获取所有数据
  const getAllData = useCallback(
    async (storeName: string) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.getAll(storeName)
    },
    [db]
  )
  // 更新数据
  const updateData = useCallback(
    async (storeName: string, data: any) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.put(storeName, data)
    },
    [db]
  )
  // 删除数据
  const deleteData = useCallback(
    async (storeName: string, key: string | number) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.delete(storeName, key)
    },
    [db]
  )
  // 清空存储
  const clearStore = useCallback(
    async (storeName: string) => {
      if (!db) throw new Error('数据库未初始化')
      return await db.clear(storeName)
    },
    [db]
  )
  // 关闭数据库连接
  const closeDB = useCallback(async () => {
    if (!db) throw new Error('数据库未初始化')
    db.close()
  }, [db])
  // 删除数据库
  const deleteDatabase = useCallback(
    async (dbName: string) => {
      if (!db) throw new Error('数据库未初始化')
      return await IndexedDB.deleteDatabase(dbName)
    },
    [db]
  )
  // 初始化状态
  const value: IndexedDBContextType = {
    db,
    addData,
    getData,
    getAllDataByIndex,
    getAllData,
    updateData,
    deleteData,
    clearStore,
    closeDB,
    deleteDatabase
  }
  return <IndexedDBContext.Provider value={value}>{children}</IndexedDBContext.Provider>
}
export { IndexedDBContext }

export default IndexedDBProvider
