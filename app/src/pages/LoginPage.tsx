import LoginForm from '../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
