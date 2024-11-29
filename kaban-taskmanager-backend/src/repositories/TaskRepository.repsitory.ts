import { Task } from 'src/domain/entities/Task.entity';
import { GenericRepository } from './GenericRepository.repository';
import { ITaskRepository } from 'src/interfaces/ITaskRepository.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
export class TaskRepository extends GenericRepository<Task> implements ITaskRepository {
  constructor(
    @InjectModel(Task.name)
    private readonly task_repository: Model<Task>,
  ) {
    super(task_repository);
  }
}
