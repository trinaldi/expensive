import { UserType } from '../../types'
import { User as UserComponent} from './User'

type UserListProps = {
  users: UserType[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <ul className="justify-center w-96">
        {users.map((user) => (
          <UserComponent user={user} />
        ))}
      </ul>
    </div>
  )
}

export default UserList
