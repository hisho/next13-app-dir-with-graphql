import { ObjectType, PickType } from '@nestjs/graphql';
import { Post as PostModel } from '../../../@generated/prisma-nestjs-graphql/post/post.model';

@ObjectType()
export class Post extends PickType(PostModel, [
  'id',
  'title',
  'content',
  'createdAt',
  'updatedAt',
  'tags',
]) {}
