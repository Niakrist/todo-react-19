import { useTransition } from 'react'
import { deleteUser } from '../../../../shared/api/api'
import type { UserType } from '../../model'

type IUserCardProps = {
  user: UserType
  refetchUsers: () => void
}

export const UserCard = ({ user, refetchUsers }: IUserCardProps) => {
  // pisimistic update

  const [isPending, startTransition] = useTransition()
  const handleDelete = async (id: string) => {
    startTransition(async () => {
      await deleteUser(id)
      startTransition(async () => {
        refetchUsers()
      })
    })
  }

  return (
    <li className='flex justify-between items-center border p-2 m-2 rounded bg-gray-100'>
      {user.email}

      <button
        onClick={() => handleDelete(user.id)}
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500'
        type='button'
        disabled={isPending}
      >
        delete
      </button>
    </li>
  )
}
