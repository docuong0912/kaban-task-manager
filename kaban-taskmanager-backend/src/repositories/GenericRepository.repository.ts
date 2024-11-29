import { Model, ObjectId } from 'mongoose';
import { BaseEntity } from 'src/domain/base/Base.entity';
import { IGenericRepository } from 'src/interfaces/IGenericRepositories.interface';
export class GenericRepository<T extends BaseEntity> implements IGenericRepository<T> {
  protected constructor(private readonly model: Model<T>) {
    this.model = model;
  }
  async findWhere(condition: object): Promise<T[]> {
    return await this.model.find({ ...condition, isDeleted: false });
  }
  async getAll(): Promise<T[]> {
    return this.model.find({ isDeleted: false });
  }
  async getById(id: ObjectId): Promise<T> {
    return this.model.findOne({ _id: id });
  }
  async addAsync(dto: T | any): Promise<T> {
    const data = this.model.create(dto);
    return data;
  }
  async addRangeAsync(dto: T[] | any): Promise<T[]> {
    return await this.model.insertMany(dto);
  }
  async updateAync(filter: object, dto: Partial<T> | any): Promise<T> {
    return await this.model.findOneAndUpdate(filter, { ...dto, lastSavedTime: Date.now }, { new: true });
  }
  async removeAsync(id: ObjectId): Promise<boolean> {
    return !!(await this.model.findByIdAndUpdate(id, { isDeleted: true }).exec());
  }
}
