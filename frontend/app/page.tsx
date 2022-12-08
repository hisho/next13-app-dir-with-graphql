import { Todos } from '@src/feature/todo/todos/Todos'

const Page = () => {
  return (
    <div>
      <Todos>
        {(todos) =>
          todos.map(({ title, id }) => (
            <div key={`Todos_${id}`}>
              <p>{id}</p>
              <h1>{title}</h1>
            </div>
          ))
        }
      </Todos>
    </div>
  )
}

export default Page
