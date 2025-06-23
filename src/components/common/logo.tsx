import { useNavigate } from "react-router-dom"

const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className='h-14' onClick={() => navigate('/')}>
        <img src='/logo.jpg' className='h-full w-full object-contain' />
    </div>
  )
}

export default Logo