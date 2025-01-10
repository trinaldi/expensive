import './App.css'
import Header from './components/Header'
import UserList from './components/User/UserList'
import { useUsers } from './hooks/useUsers'

const App = () => {
  const { users, loading } = useUsers()

  return (
    <>
      <Header title="Expensive" />
      <main>
        { loading ? <p>Loading...</p> : <UserList users={users}/> }
      </main>
    </>
  )
}

export default App
