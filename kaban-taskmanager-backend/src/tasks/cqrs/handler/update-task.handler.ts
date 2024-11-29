import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../command/update-task.command';
import { BadRequestException, Inject } from '@nestjs/common';
import { ITaskRepository } from 'src/interfaces/ITaskRepository.interface';
import { Types } from 'mongoose';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(
    @Inject('ITaskRepository')
    private readonly repository: ITaskRepository,
  ) {}
  async execute(command: UpdateTaskCommand): Promise<any> {
    const objectId = new Types.ObjectId(command.id);
    const task = await this.repository.getById(command.id);
    if (!task) {
      throw new BadRequestException('Task not found');
    } else if (task.status === command.status) {
      return {
        message: 'Nothing to change',
      };
    }
    return await this.repository.updateAync({ _id: objectId }, { status: command.status });
  }
}
