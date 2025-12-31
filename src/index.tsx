import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/index.less'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'
import '@/mock/db'
// const env = process.env
// console.log('环境---', env)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
)
reportWebVitals()
