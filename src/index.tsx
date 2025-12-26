import ReactDOM from 'react-dom/client'
import './styles/index.less'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
)
reportWebVitals()
