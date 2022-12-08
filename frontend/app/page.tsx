import { Posts } from '@src/feature/post/posts/Posts'

const Page = () => {
  return (
    <div>
      <Posts>
        {(posts) =>
          posts.map(({ title, id }) => (
            <div key={`Posts_${id}`}>
              <p>{id}</p>
              <h1>{title}</h1>
            </div>
          ))
        }
      </Posts>
    </div>
  )
}

export default Page
