/**
 * todo作成
 * create todo mutation
 */
export const createTodoMutation = `
mutation createTodo($input: CreateTodoInput!){
  createTodo(
    input: $input
  ) {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}` as const;

/**
 * todo一覧取得
 * todo query
 */
export const todoQuery = `
query todo($uuid: String!){
  todo(uuid: $uuid) {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}` as const;
