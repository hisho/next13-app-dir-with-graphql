import { Test, TestingModule } from '@nestjs/testing';
import { PostResolver } from './todo.resolver';
import { PostService } from './todo.service';

describe('TodoResolver', () => {
  let resolver: PostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolver, PostService],
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
