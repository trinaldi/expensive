import './App.css'
import ExpenseList from './components/Expense/ExpenseList'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header title="Expensive" />
      <main>
        <ExpenseList />
      </main>
    </>
  )
}

export default App
