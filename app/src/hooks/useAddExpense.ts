import { useState } from 'react'
import { ExpenseType } from '../types'

const URL = 'http://localhost:3000/expenses'

const checkToken = (token?: string): string | undefined => {
  if (token === undefined) {
    const storedToken = localStorage.getItem('token')
    return storedToken ? storedToken : undefined
  }
  return token
}

const useAddExpense = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const addExpense = async (expense: ExpenseType, token?: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    token = checkToken(token)

    if (!token) {
      console.error('no token was given')
      setError('no token was given')
      setLoading(false)
    }

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(expense),
      })

      if (!response.ok) {
        throw new Error('Failed to add expense')
      }

      const newExpense = await response.json()
      setSuccess(true)

      return newExpense
    } catch (err) {
      const error = err as Error
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { addExpense, loading, error, success }
}

export default useAddExpense
