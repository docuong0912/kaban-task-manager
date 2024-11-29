/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Task } from 'src/domain/entities/Task.entity';
import { IGenericRepository } from './IGenericRepositories.interface';

export interface ITaskRepository extends IGenericRepository<Task> {}
