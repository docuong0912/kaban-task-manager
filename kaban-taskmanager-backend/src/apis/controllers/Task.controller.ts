import { Body, Controller, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from 'src/tasks/cqrs/command/create-task.command';
import { UpdateTaskCommand } from 'src/tasks/cqrs/command/update-task.command';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('create-task')
  async createTask(@Body() createTaskCommand: CreateTaskCommand) {
    return this.commandBus.execute(createTaskCommand);
  }
  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('update-status')
  async updateTaskStatus(@Body() updateTaskCommand: UpdateTaskCommand) {
    return this.commandBus.execute(updateTaskCommand);
  }
}
