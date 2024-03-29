import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Tag } from '../../@generated/prisma-nestjs-graphql/tag/tag.model';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async findOne(todoId: string) {
    return this.prisma.post.findUniqueOrThrow({
      where: {
        id: todoId,
      },
    });
  }

  async create(input: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        ...input,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async update(todoId: string, input: UpdatePostInput) {
    return this.prisma.post.update({
      where: {
        id: todoId,
      },
      data: {
        ...input,
        updatedAt: new Date(),
      },
    });
  }

  async delete(todoId: string) {
    return this.prisma.post.delete({
      where: {
        id: todoId,
      },
    });
  }

  async findTags(postId: string): Promise<Tag[]> {
    return this.prisma.post
      .findUnique({
        where: {
          id: postId,
        },
      })
      .tags();
  }
}
