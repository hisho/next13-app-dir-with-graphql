import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSendGridInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
