import { useState, useEffect } from 'react'
import { ExpenseType } from '../types'

export const useExpenses = () => {{
  const [expenses, setExpenses] = useState<ExpenseType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('tbd')
    .then(response => response.json())
    .then(data => {
      setExpenses(data)
      setLoading(false)
    })
    .catch(err => {
      console.error(`Error while fetching data: ${err}`)
      setLoading(false)
    })
  }, [])

  return { expenses, loading }
}}
