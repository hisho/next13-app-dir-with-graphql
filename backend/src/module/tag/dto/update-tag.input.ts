import { CreateTagInput } from './create-tag.input';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class UpdateTagInput extends PickType(CreateTagInput, [
  'name',
  'description',
] as const) {}
