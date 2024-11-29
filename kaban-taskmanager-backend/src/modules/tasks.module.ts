import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from 'src/apis/controllers/Task.controller';
import { Task, TaskSchema } from 'src/domain/entities/Task.entity';
import { TaskRepository } from 'src/repositories/TaskRepository.repsitory';
import { CreateTaskHandler } from 'src/tasks/cqrs/handler/create-task.handler';
import { UpdateTaskHandler } from 'src/tasks/cqrs/handler/update-task.handler';
@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]), CqrsModule],
  controllers: [TaskController],
  providers: [
    CreateTaskHandler,
    UpdateTaskHandler,
    {
      provide: 'ITaskRepository',
      useClass: TaskRepository,
    },
  ],
})
export class TaskModule {}
