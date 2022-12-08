import { use } from 'react'
import { fetchTodo, FetchTodoParams } from '@src/feature/todo/todo/fetchTodo'

type Props = FetchTodoParams

export const Todo = ({ todoId }: Props) => {
  const todo = use(fetchTodo({ todoId }))

  return (
    <div>
      <div>{todo.title}</div>
      <div>の詳細だよ</div>
    </div>
  )
}
