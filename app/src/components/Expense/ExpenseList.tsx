import { Expense as ExpenseComponent } from './Expense'
import { ExpenseType } from '../../types'

interface ExpenseListProps {
  expenses: ExpenseType[]
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="justify-center w-96">
      <h1 className="p-4">Expenses</h1>
      <ul>
        {expenses?.map((expense) => (
          <ExpenseComponent key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
