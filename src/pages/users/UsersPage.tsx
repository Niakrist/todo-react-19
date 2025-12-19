import { useEffect, useState } from 'react'

type UserType = {
  id: string
  email: string
}

export const UsersPage = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users')
        if (!response.ok) {
          throw new Error(`Ошибка, код: ${response.ok}`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [])

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
      <section>
        <form className='flex gap-2' onSubmit={handleSubmit}>
          <input
            className='border p-2 rounded'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Add
          </button>
        </form>
      </section>
      <section>
        <ul className='flex flex-col'>
          {users.map(user => (
            <li
              className='flex justify-between items-center border p-2 m-2 rounded bg-gray-100'
              key={user.id}
            >
              {user.email}

              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => handleDelete(user.id)}
                type='button'
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
