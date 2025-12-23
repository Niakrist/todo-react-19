import { useEffect, useState } from 'react'
import { UserForm, UserList, type UserType } from '../../feature'

export const UsersPage = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [email, setEmail] = useState<string>('')

  useEffect(() => {}, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setUsers([...users, { id: crypto.randomUUID(), email: email }])
    setEmail('')
  }

  const handleDelete = (userId: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }

  return (
    <main className='container mx-auto p-4 pt-10 flex flex-col gap-4'>
      <h1 className='text-xl font-bold underline'>UsersPage</h1>
      <UserForm />
      <UserList users={users} />
    </main>
  )
}
