import { Expense as ExpenseComponent } from './Expense'
import { ExpenseType } from '../../types'

interface ExpenseListProps {
  expenses: ExpenseType[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <ul className="justify-center w-96">
        {expenses.map((expense) => (
          <ExpenseComponent expense={expense} />
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
