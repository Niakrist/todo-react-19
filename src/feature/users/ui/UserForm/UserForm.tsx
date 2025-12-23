import { useState, useTransition } from 'react'
import { createUser } from '../../../../shared/api/api'

export const UserForm = ({ refetchUsers }: { refetchUsers: () => void }) => {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Позволяет реализовать концепцию Stale-While-Revalidate (SWR)
    // Transition в React нужен для долгих переходов (загрузки новых данных) , useState() в input - быстрый переход
    startTransition(async () => {
      await createUser({ email, id: crypto.randomUUID() })
      startTransition(() => {
        refetchUsers()
        setEmail('')
      })
    })
  }

  console.log('isPending: ', isPending)

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        className='border p-2 rounded disabled:bg-gray-500'
        type='email'
        required
        disabled={isPending}
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500'
        type='submit'
        disabled={isPending}
      >
        Add
      </button>
    </form>
  )
}
