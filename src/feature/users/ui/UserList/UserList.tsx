import type { UserType } from '../../model'
import { UserCard } from './UserCard'

type IUserListProps = {
  users: UserType[]
}

export const UserList = ({ users }: IUserListProps) => {
  return (
    <ul className='flex flex-col'>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}
