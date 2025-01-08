import { Expense, Expense as ExpenseComponent } from './Expense'

const expenses = [
  {id: 1, amount: 12.24, description: 'first expense', date: new Date(), user: 1 },
  {id: 2, amount: 12.23, description: 'second expense', date: new Date(), user: 1 },
  {id: 3, amount: 12.23, description: 'third expense', date: new Date(), user: 1 },
  {id: 4, amount: 12.23, description: 'fourth expense', date: new Date(), user: 1 },
  {id: 5, amount: 12.23, description: 'fifth expense', date: new Date(), user: 1 },
  {id: 6, amount: 12.23, description: 'sixth expense', date: new Date(), user: 1 },
]

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = () => {
  return (

    <div className="flex flex-col items-center w-full">
      <ul className="justify-center w-96">
        {expenses.map((expense) => (
          <ExpenseComponent expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
