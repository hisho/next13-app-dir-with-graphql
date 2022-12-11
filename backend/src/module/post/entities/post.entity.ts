import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { Tag } from '../../tag/entities/tag.entity';
import { Post as PostModel } from '../../../@generated/prisma-nestjs-graphql/post/post.model';

@ObjectType()
export class Post extends PickType(PostModel, [
  'id',
  'title',
  'content',
  'createdAt',
  'updatedAt',
]) {
  /**
   * Postに紐付いているタグ
   */
  @Field(() => [Tag], {
    nullable: false,
    description: 'Postに紐付いているタグ',
  })
  tags: Tag[];
}
