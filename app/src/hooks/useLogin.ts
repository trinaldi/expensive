import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface UseLoginResult {
  login: (email: string, password: string) => Promise<void>
  error: string | null
  isLoading: boolean
}

const useLogin = (): UseLoginResult => {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)

        navigate('/expenses')
      } else {
        const data = await response.json()
        setError(data.message || 'Login failed')
      }
    } catch (e) {
      const error = e as Error
      setError(error.message || 'An error ocorred')
    } finally {
      setIsLoading(false)
    }
  }

  return { login, error, isLoading }
}

export default useLogin
