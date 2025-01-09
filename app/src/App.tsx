import './App.css'
import ExpenseList from './components/Expense/ExpenseList'
import Header from './components/Header'
import { useExpenses } from './hooks/useExpenses'

const expensesOff = [
  {id: 1, amount: 12.24, description: 'first expense', date: new Date(), user: 1 },
  {id: 2, amount: 12.23, description: 'second expense', date: new Date(), user: 1 },
  {id: 3, amount: 12.23, description: 'third expense', date: new Date(), user: 1 },
  {id: 4, amount: 12.23, description: 'fourth expense', date: new Date(), user: 1 },
  {id: 5, amount: 12.23, description: 'fifth expense', date: new Date(), user: 1 },
  {id: 6, amount: 12.23, description: 'sixth expense', date: new Date(), user: 1 },
]

const App = () => {
  const { expenses, loading } = useExpenses()

  return (
    <>
      <Header title="Expensive" />
      <main>
        { loading ? <p>Loading...</p> : <ExpenseList expenses={expensesOff}/> }
      </main>
    </>
  )
}

export default App
