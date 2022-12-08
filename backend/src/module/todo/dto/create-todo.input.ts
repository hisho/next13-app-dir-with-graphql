import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'タイトル', nullable: false })
  @IsNotEmpty({ message: 'タイトルは必須です。' })
  title!: string;

  @Field(() => String, {
    description: '説明',
    nullable: true,
    defaultValue: null,
  })
  @IsOptional()
  @MinLength(10, { message: '説明文は10文字以上必要です。' })
  description!: string | null;
}
