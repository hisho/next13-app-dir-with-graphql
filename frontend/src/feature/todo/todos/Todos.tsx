import { ReactNode, use } from 'react'
import {
  fetchTodos,
  FetchTodosResult,
} from '@src/feature/todo/todos/fetchTodos'

type Props = {
  children: ReactNode | ((todos: FetchTodosResult) => ReactNode)
}

export const Todos = ({ children }: Props) => {
  const todos = use(fetchTodos())

  return <>{typeof children === 'function' ? children(todos) : children}</>
}
