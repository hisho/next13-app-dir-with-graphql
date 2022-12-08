import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SendGridService } from './send-grid.service';
import { SendGrid } from './entities/send-grid.entity';
import { CreateSendGridInput } from './dto/create-send-grid.input';
import { UpdateSendGridInput } from './dto/update-send-grid.input';

@Resolver(() => SendGrid)
export class SendGridResolver {
  constructor(private readonly sendGridService: SendGridService) {}

  @Mutation(() => SendGrid)
  createSendGrid(
    @Args('createSendGridInput') createSendGridInput: CreateSendGridInput,
  ) {
    return this.sendGridService.create(createSendGridInput);
  }

  @Query(() => [SendGrid], { name: 'sendGrid' })
  findAll() {
    return this.sendGridService.findAll();
  }

  @Query(() => SendGrid, { name: 'sendGrid' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sendGridService.findOne(id);
  }

  @Mutation(() => SendGrid)
  updateSendGrid(
    @Args('updateSendGridInput') updateSendGridInput: UpdateSendGridInput,
  ) {
    return this.sendGridService.update(
      updateSendGridInput.id,
      updateSendGridInput,
    );
  }

  @Mutation(() => SendGrid)
  removeSendGrid(@Args('id', { type: () => Int }) id: number) {
    return this.sendGridService.remove(id);
  }
}
