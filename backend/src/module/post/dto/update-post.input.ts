import { InputType, PickType } from '@nestjs/graphql';
import { CreatePostInput } from './create-post.input';

@InputType()
export class UpdatePostInput extends PickType(CreatePostInput, [
  'title',
  'content',
] as const) {}
