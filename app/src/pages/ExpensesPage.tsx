import UserList from '../components/User/UserList'
import { useUsers } from '../hooks/useUsers'

const ExpensesPage = () => {
  const { users, loading } = useUsers()
  return <>{loading ? <p>Loading...</p> : <UserList users={users} />}</>
}

export default ExpensesPage
