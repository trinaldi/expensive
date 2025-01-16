import { useAuth } from '../context/AuthContext'
const Header = () => {
  const { isLoggedIn } = useAuth()
  return (
    <header className="sticky top-0 z-10 px-6 py-4 text-white bg-gray-800 border-b shadow">
      <h1 className="text-xl font-bold md:text-2xl">
        {isLoggedIn ? `Welcome` : 'Expensive'}
      </h1>
    </header>
  )
}

export default Header
