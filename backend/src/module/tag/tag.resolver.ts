import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { Post } from '../post/entities/post.entity';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => Tag, { description: 'tag作成' })
  createTag(@Args('input') input: CreateTagInput) {
    return this.tagService.create(input);
  }

  @Query(() => [Tag], { description: 'tag一覧取得' })
  tags() {
    return this.tagService.findAll();
  }

  @Query(() => Tag, { description: 'post取得' })
  tag(@Args('tagId') tagId: string) {
    return this.tagService.findOne(tagId);
  }

  @ResolveField(() => [Post])
  async posts(@Parent() tag: Tag) {
    return this.tagService.findPosts(tag.id);
  }
}
