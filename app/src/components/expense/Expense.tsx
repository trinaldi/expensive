export interface Expense {
  id: number;
  amount: number;
  description: string;
  date: Date;
  user: number;
}

interface ExpenseProps {
  expense: Expense;
}

export const Expense: React.FC<ExpenseProps> = ({expense}) => {
  return (
    <li className="flex flex-col w-full list-none border-b border-gray-200 rounded-b md:flex-row">
      <div className="flex-col flex-1 flex-grow p-4 text-left hover:text-red-500/80">
        <p className="text-lg font-bold">{expense.description}</p>
        <p>R$ {expense.amount}</p>
      </div>
      <div className="flex items-center flex-1 p-4 ">
        {expense.date.toLocaleDateString('pt-br')}
      </div>
    </li>
  )
}
