import IndexedDB from '@/utils/IndexedDB'
// 数据库配置信息
const DB_CONFIG = {
  dbName: 'MyAppDB',
  version: 1,
  stores: [
    {
      name: 'users',
      options: { keyPath: 'id', autoIncrement: true },
      indexes: [
        { name: 'username', keyPath: 'username', unique: true },
        { name: 'name', keyPath: 'name', unique: false }
      ]
    }
  ]
}
const dbInstance = new IndexedDB(DB_CONFIG.dbName, DB_CONFIG.version)
dbInstance.open(DB_CONFIG.stores)
export default dbInstance
