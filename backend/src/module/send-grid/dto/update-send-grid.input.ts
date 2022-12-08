import { CreateSendGridInput } from './create-send-grid.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSendGridInput extends PartialType(CreateSendGridInput) {
  @Field(() => Int)
  id: number;
}
