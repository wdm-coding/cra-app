import { useContext } from 'react';
import { IndexedDBContext } from '@/pages/Provider/IndexedDBProvider';
const useIndexedDB = () => {
  const context = useContext(IndexedDBContext);
  if (!context) {
    throw new Error('useIndexedDB 必须在 IndexedDBProvider 内使用');
  }
  return context;
};

export default useIndexedDB;