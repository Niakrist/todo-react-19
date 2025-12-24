import type { UserType } from '../../model'

type IUserCardProps = {
  user: UserType
}

export const UserCard = ({ user }: IUserCardProps) => {
  return (
    <li className='flex justify-between items-center border p-2 m-2 rounded bg-gray-100'>
      {user.email}

      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        type='button'
      >
        delete
      </button>
    </li>
  )
}
