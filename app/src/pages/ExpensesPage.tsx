import useUserExpenses from '../hooks/useUserExpenses'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import ExpenseList from '../components/Expense/ExpenseList'

const ExpensesPage = () => {
  const { isLoggedIn, userId } = useAuth()
  const { user, loading, error } = useUserExpenses(userId as string)

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <ExpenseList expenses={user!.expenses} />
    </div>
  )
}

export default ExpensesPage
