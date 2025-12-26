import styles from './index.less'
import useIndexedDB from '@/hooks/useIndexedDB'
import { useCallback } from 'react'
import { Button } from 'antd'
const ReduxStore: React.FC = () => {
  const { db, addData, deleteData, closeDB, getAllData, updateData } = useIndexedDB()
  // 查询所有数据
  const getList = useCallback(async () => {
    if (!db) return
    try {
      const allData = await getAllData('users')
      console.log('所有数据:', allData)
    } catch (err) {
      console.error('查询失败', err)
    }
  }, [db, getAllData])
  // 添加数据到数据库中
  const add = useCallback(async () => {
    if (!db) return
    try {
      const id = await addData('users', { name: 'John Doe', age: 30, id: 10 })
      await getList()
      console.log('新增了数据:', id)
    } catch (err) {
      console.error('新增失败', err)
    }
  }, [db, addData, getList])
  // 删除数据
  const del = useCallback(
    async (id: number) => {
      if (!db) return
      try {
        await deleteData('users', id)
        await getList()
        console.log('删除了数据:', id)
      } catch (err) {
        console.error('删除失败', err)
      }
    },
    [db, deleteData, getList]
  )
  // 修改数据
  const update = useCallback(async () => {
    if (!db) return
    try {
      await updateData('users', { name: 'John Doe Updated', id: 10, age: 31 })
      await getList()
      console.log('更新了数据')
    } catch (err) {
      console.error('更新失败', err)
    }
  }, [db, updateData, getList])
  return (
    <div>
      <div>
        <Button onClick={getList} style={{ marginRight: '10px' }}>
          查询所有数据
        </Button>
        <Button onClick={add} style={{ marginRight: '10px' }}>
          添加数据
        </Button>
        <Button onClick={() => del(1)} style={{ marginRight: '10px' }}>
          删除ID为1的数据
        </Button>
        <Button onClick={update} style={{ marginRight: '10px' }}>
          更新ID为10的数据
        </Button>
        <Button onClick={closeDB} style={{ marginRight: '10px' }}>
          关闭数据库
        </Button>
      </div>
      <div className={styles.homeTitle}>
        <div>建立公共数据资源“一体账”</div>
        <div style={{ paddingTop: '15px' }}>促进公共数据资源高效开发利用</div>
      </div>
    </div>
  )
}

export default ReduxStore
