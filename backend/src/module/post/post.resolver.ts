import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postsService: PostService) {}

  @Query(() => [Post], { description: 'post一覧取得' })
  posts() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { description: 'post取得' })
  post(@Args('postId') postId: string) {
    return this.postsService.findOne(postId);
  }

  @Mutation(() => Post, { description: 'post作成' })
  createPost(@Args('input') input: CreatePostInput) {
    return this.postsService.create(input);
  }

  @Mutation(() => Post, { description: 'post更新' })
  updatePost(
    @Args('postId') postId: string,
    @Args('input') input: UpdatePostInput,
  ) {
    return this.postsService.update(postId, input);
  }

  @Mutation(() => Post, { description: 'post削除' })
  deletePost(@Args('postId') postId: string) {
    return this.postsService.delete(postId);
  }
}
