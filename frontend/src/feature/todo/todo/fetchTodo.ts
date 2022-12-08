import { GraphQLClient } from 'graphql-request'
import { TodoDocument } from '@src/feature/todo/todo/todo.generated'
import type { Todo } from '@src/lib/graphql/graphql.type'

export type FetchTodoParams = {
  todoId: Todo['id']
}

export const fetchTodo = async ({ todoId }: FetchTodoParams) => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return await new GraphQLClient('http://localhost:4000/graphql')
    .request(TodoDocument, { todoId })
    .then((data) => data.todo)
}

export type FetchTodoResult = Awaited<ReturnType<typeof fetchTodo>>
