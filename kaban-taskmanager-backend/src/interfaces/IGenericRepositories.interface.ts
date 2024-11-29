export interface IGenericRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  addAsync(dto: T | any): Promise<T>;
  updateAync(filter: object, dto: Partial<T> | any): Promise<void>;
  removeAsync(dto: T | any): Promise<boolean>;
  findWhere(condition: object): Promise<T[]>;
}
