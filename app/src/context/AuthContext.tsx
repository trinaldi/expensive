import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react'
import decodeToken from '../utils/decodeToken'

interface AuthContextType {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  email: string | null
  setEmail: (email: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const email = decodeToken(token)
      setEmail(email)
    }
  })
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, email, setEmail }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
