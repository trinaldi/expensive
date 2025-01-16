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
  userId: string | null
  name: string | null
  email: string | null
  setUserId: (userId: string | null) => void
  setName: (name: string | null) => void
  setEmail: (email: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = decodeToken(token)
      if (decoded) {
        setUserId(decoded.userId)
        setName(decoded.name)
        setEmail(decoded.email)
        setIsLoggedIn(true) // Assume the user is logged in if the token is valid
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userId,
        name,
        email,
        setUserId,
        setName,
        setEmail,
      }}
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
