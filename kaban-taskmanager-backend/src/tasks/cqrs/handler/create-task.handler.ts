import { Inject } from '@nestjs/common';
import { CreateTaskCommand } from '../command/create-task.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ITaskRepository } from 'src/interfaces/ITaskRepository.interface';
@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    @Inject('ITaskRepository')
    private readonly repository: ITaskRepository,
  ) {}
  async execute(command: CreateTaskCommand): Promise<any> {
    const task = await this.repository.addAsync(command);
    return {
      task,
    };
  }
}
