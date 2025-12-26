import { useEffect } from 'react'
import { useNavigate } from 'react-router'
const Redirect = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/client')
  }, [navigate])
  return <></>
}

export default Redirect
