import { useEffect, useState } from 'react'
import { UserType } from '../types'
import decodeToken from '../utils/decodeToken'

const useUserExpenses = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const token = localStorage.getItem('token')

  let userId
  if (token) {
    userId = decodeToken(token).userId
  }

  useEffect(() => {
    const fetchUserExpenses = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch user expenses: ${response.statusText}`
          )
        }

        const result: UserType = await response.json()
        setUser(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchUserExpenses()
  }, [userId])

  return { user, loading, error }
}

export default useUserExpenses
