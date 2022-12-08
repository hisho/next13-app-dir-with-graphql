import { use } from 'react'
import { fetchTodos } from '@src/feature/todo/todos/fetchTodos'

export const Todos = () => {
  const todos = use(fetchTodos())

  return (
    <div>
      {todos.map((todo) => (
        <div key={`Todos_${todo.id}`}>{todo.title}</div>
      ))}
    </div>
  )
}
