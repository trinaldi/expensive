import useUserExpenses from '../hooks/useUserExpenses'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import ExpenseList from '../components/Expense/ExpenseList'
import AddExpense from '../components/Expense/AddExpense'
import { ExpenseType } from '../types'

const ExpensesPage = () => {
  const { isLoggedIn } = useAuth()
  const { user, loading, error, updateUserExpenses } = useUserExpenses()

  const handleAddExpense = (newExpense: ExpenseType) => {
    if (user) {
      const updatedUser = {
        ...user,
        expenses: [...user.expenses, newExpense],
      }

      updateUserExpenses(updatedUser)
    }
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="text-center w-96">
      <ExpenseList expenses={user!.expenses} />
      <AddExpense onAddExpense={handleAddExpense} />
    </div>
  )
}

export default ExpensesPage
