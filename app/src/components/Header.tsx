import { useAuth } from '../context/AuthContext'
const Header = () => {
  const { email } = useAuth()
  return (
    <header className="sticky top-0 z-10 px-6 py-4 text-white bg-gray-800 border-b shadow">
      <h1 className="text-xl font-bold lowercase md:text-2xl">
        {email ? `Welcome, ${email}` : 'Expensive'}
      </h1>
    </header>
  )
}

export default Header
