import React from 'react'
class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  // 静态方法，捕获子组件的错误
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error }
  }
  // 生命周期方法，捕获子组件的错误
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error: error, errorInfo: errorInfo })
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          className="w-full h-full"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red', fontSize: '50px' }}
        >
          页面出错了
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
