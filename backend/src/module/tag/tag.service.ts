import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/create-tag.input';
import { PrismaService } from '../../prisma/prisma.service';
import { Post } from 'src/@generated/prisma-nestjs-graphql/post/post.model';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateTagInput) {
    return this.prisma.tag.create({
      data: {
        ...input,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.tag.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async findOne(tagId: string) {
    return this.prisma.tag.findUniqueOrThrow({
      where: {
        id: tagId,
      },
    });
  }

  async findPosts(tagId: string): Promise<Post[]> {
    return this.prisma.tag
      .findUnique({
        where: {
          id: tagId,
        },
      })
      .posts();
  }
}
