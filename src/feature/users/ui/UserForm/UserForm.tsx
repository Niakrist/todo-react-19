import { useState } from 'react'
import { createUser } from '../../../../shared/api/api'

export const UserForm = ({ refetchUsers }: { refetchUsers: () => void }) => {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createUser({ email, id: crypto.randomUUID() })
    refetchUsers()
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        onChange={e => setEmail(e.target.value)}
        className='border p-2 rounded'
        type='email'
        required
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        type='submit'
      >
        Add
      </button>
    </form>
  )
}
