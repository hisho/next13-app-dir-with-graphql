import { Test, TestingModule } from '@nestjs/testing';
import { SendGridResolver } from './send-grid.resolver';
import { SendGridService } from './send-grid.service';

describe('SendGridResolver', () => {
  let resolver: SendGridResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendGridResolver, SendGridService],
    }).compile();

    resolver = module.get<SendGridResolver>(SendGridResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
