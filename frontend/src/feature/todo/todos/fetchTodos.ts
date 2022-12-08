import { GraphQLClient } from 'graphql-request'
import { TodosDocument } from '@src/feature/todo/todos/todos.generated'

export const fetchTodos = async () => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return await new GraphQLClient('http://localhost:4000/graphql')
    .request(TodosDocument)
    .then((data) => data.todos)
}

export type FetchTodosResult = Awaited<ReturnType<typeof fetchTodos>>
