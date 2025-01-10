import { UserType } from '../../types'
import ExpenseList from '../Expense/ExpenseList'

type UserProps = {
  user: UserType;
}

export const User: React.FC<UserProps> = ({ user }) => {
  return (
    <li className="user">
      <h2 className="text-3xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
      {user.expenses &&
      <>
        <h3 className="text-xl font-bold">Expenses</h3>
        <ExpenseList expenses={user.expenses} />
      </>
      }
    </li>
  )
}
