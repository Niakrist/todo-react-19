import { use } from 'react'
import type { UserType } from '../../model'
import { UserCard } from './UserCard'

type IUserListProps = {
  usersPromise: Promise<UserType[]>
  refetchUsers: () => void
}

export const UserList = ({ usersPromise, refetchUsers }: IUserListProps) => {
  // хук use прямо в рендере превращает наш Promise в users
  // use выбрасывает ошибку с Promise если возвращаются не users, а пустой [] или ошибка
  const users = use(usersPromise)

  return (
    <ul className='flex flex-col'>
      {users.map(user => (
        <UserCard refetchUsers={refetchUsers} key={user.id} user={user} />
      ))}
    </ul>
  )
}
