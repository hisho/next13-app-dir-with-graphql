import { ObjectType, PickType } from '@nestjs/graphql';
import { Todo as TodoModel } from '../../../@generated/prisma-nestjs-graphql/todo/todo.model';

@ObjectType()
export class Post extends PickType(TodoModel, [
  'id',
  'title',
  'description',
  'createdAt',
  'updatedAt',
]) {}
