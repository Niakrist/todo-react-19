import { use } from 'react'
import type { UserType } from '../../model'
import { UserCard } from './UserCard'

type IUserListProps = {
  usersPromise: Promise<UserType[]>
}

export const UserList = ({ usersPromise }: IUserListProps) => {
  // хук use прямо в рендере превращает наш Promise в users
  // use выбрасывает ошибку с Promise если возвращаются не users, а пустой [] или ошибка
  const users = use(usersPromise)

  console.log('users: ', users)

  return (
    <ul className='flex flex-col'>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}
