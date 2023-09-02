import { useState } from 'react'

const Addtodo = () => {
  const [todo, setTodo] = useState('')

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }


  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Addtodo
