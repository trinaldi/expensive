import useUserExpenses from '../hooks/useUserExpenses'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import ExpenseList from '../components/Expense/ExpenseList'
import AddExpense from '../components/Expense/AddExpense'

const ExpensesPage = () => {
  const { isLoggedIn } = useAuth()
  const { user, loading, error } = useUserExpenses()

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <ExpenseList expenses={user!.expenses} />
      <AddExpense />
    </div>
  )
}

export default ExpensesPage
