import { Expense as ExpenseComponent } from './Expense'
import TotalExpenses from './TotalExpenses'
import { ExpenseType } from '../../types'

interface ExpenseListProps {
  expenses: ExpenseType[]
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  )

  return (
    <div className="justify-center w-96">
      <h1 className="p-4">Expenses</h1>
      <ul>
        {expenses?.map((expense) => (
          <ExpenseComponent key={expense.id} expense={expense} />
        ))}
      </ul>
      <TotalExpenses total={total} />
    </div>
  )
}

export default ExpenseList
