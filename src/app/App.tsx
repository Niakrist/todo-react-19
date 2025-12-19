fetch('http://localhost:3001/users').then(res => console.log('res: ', res))

export const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </div>
  )
}
