import LoginForm from '../components/LoginForm/LoginForm'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const { isLoggedIn } = useAuth()

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage
