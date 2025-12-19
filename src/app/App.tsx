import { Route, Routes } from 'react-router-dom'
import { UsersPage } from '../pages/users'
import { TodoListPage } from '../pages/todo-list'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UsersPage />}></Route>
        <Route path='/:userId/tasks' element={<TodoListPage />}></Route>
      </Routes>
    </div>
  )
}
