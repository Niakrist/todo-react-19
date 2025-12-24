import { Suspense, useState } from 'react'
import { UserForm, UserList } from '../../feature'
import { fetchUsers } from '../../shared/api/api'

// Render-as-You-Fetch (Suspense-совместимый)
// Из минусов данные будут запрашиваться, даже если компонент не отрисовался
const defaultUsersPromise = fetchUsers()

export const UsersPage = () => {
  // Решает проблему, что данные будут запрашиваться, даже если компонент не отрисовался
  //  const [usersPromise, setUsersPromise] = useState(() => fetchUsers() )
  const [usersPromise, setUsersPromise] = useState(defaultUsersPromise)

  const refetchUsers = () => {
    setUsersPromise(fetchUsers())
  }

  return (
    <main className='container mx-auto p-4 pt-10 flex flex-col gap-4'>
      <h1 className='text-xl font-bold underline'>UsersPage</h1>
      <UserForm refetchUsers={refetchUsers} />
      {/* В том месте где используется use надо обернуть в Suspense */}
      <Suspense fallback={<div>divdivdivdiv</div>}>
        <UserList usersPromise={usersPromise} />
      </Suspense>
    </main>
  )
}
