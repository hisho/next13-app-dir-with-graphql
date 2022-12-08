import { InputType, PickType } from '@nestjs/graphql';
import { CreateTodoInput } from './create-todo.input';

@InputType()
export class UpdateTodoInput extends PickType(CreateTodoInput, [
  'title',
  'description',
] as const) {}
