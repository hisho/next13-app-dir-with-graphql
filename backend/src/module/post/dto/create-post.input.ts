import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'タイトル', nullable: false })
  @IsNotEmpty({ message: 'タイトルは必須です。' })
  title!: string;

  @Field(() => String, { description: '内容', nullable: false })
  @MinLength(10, { message: '内容は10文字以上必要です。' })
  content!: string;
}
