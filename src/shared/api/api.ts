import type { UserType } from '../../feature'

export const fetchUsers = async (): Promise<UserType[]> => {
  try {
    const response = await fetch('http://localhost:3001/users')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: UserType[] = await response.json()
    return data // [{ id: '1', email: '1@email.ru' }]
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return []
  }
}

export const createUser = async (user: UserType): Promise<UserType> => {
  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: UserType = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw error
  }
}

export const deleteUser = async (id: string): Promise<string> => {
  try {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return id
  } catch (error) {
    throw error
  }
}
