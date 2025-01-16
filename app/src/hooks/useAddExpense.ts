import { useState } from 'react'
import { CreateExpenseType } from '../types'

const useAddExpense = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const addExpense = async (expense: CreateExpenseType) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
