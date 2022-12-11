import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateTagInput {
  @Field(() => String, { description: 'タグ名', nullable: false })
  @IsNotEmpty({ message: 'タグ名は必須です。' })
  name!: string;

  @Field(() => String, {
    description: '説明',
    nullable: true,
    defaultValue: null,
  })
  @IsOptional()
  @MinLength(10, { message: '説明文は10文字以上必要です。' })
  description!: string | null;
}
