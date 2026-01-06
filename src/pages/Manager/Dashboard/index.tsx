import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <h1
      onClick={() => {
        navigate('/login')
      }}
    >
      Dashboard
    </h1>
  )
}

export default Dashboard
