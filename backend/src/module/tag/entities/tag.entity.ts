import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { Tag as TagModel } from '../../../@generated/prisma-nestjs-graphql/tag/tag.model';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
export class Tag extends PickType(TagModel, [
  'id',
  'name',
  'description',
  'createdAt',
  'updatedAt',
]) {
  /**
   * Tagに紐付いているPost
   */
  @Field(() => [Post], {
    nullable: false,
    description: 'Tagに紐付いているPost',
  })
  posts: Post[];
}
