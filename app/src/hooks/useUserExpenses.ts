import { useEffect, useState } from 'react'
import { UserType } from '../types'
import decodeToken from '../utils/decodeToken'

const useUserExpenses = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const token = localStorage.getItem('token')

  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token)
      setUserId(decodedToken!.userId)
    }
  }, [token])

  useEffect(() => {
    if (!userId) return

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

  const updateUserExpenses = (updatedUser: UserType) => {
    setUser(updatedUser)
  }

  return { user, loading, error, updateUserExpenses }
}

export default useUserExpenses
