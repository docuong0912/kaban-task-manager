import { ObjectId } from 'mongoose';

export interface IGenericRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: ObjectId): Promise<T>;
  addAsync(dto: T | any): Promise<T>;
  addRangeAsync(dto: T[] | any): Promise<T[]>;
  updateAync(filter: object, dto: Partial<T> | any): Promise<T>;
  removeAsync(dto: T | any): Promise<boolean>;
  findWhere(condition: object): Promise<T[]>;
}
