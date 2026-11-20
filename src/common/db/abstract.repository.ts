import { Model, QueryFilter, QueryOptions, Types } from "mongoose";
import { IUser } from "../../modules/user/interface/user.interface";
import { User } from "../../modules/user/model/user.model";

export abstract class AbstractRepository<T> {
  protected constructor(private readonly model: Model<T>) {}

  async create(data: T) {
    return this.model.create(data);
  }
  async update(
    filter: QueryFilter<T>,
    newData: Partial<T>,
    options: QueryOptions,
  ) {
    return this.model.findOneAndUpdate(filter, newData, options);
  }
  async delete(filter: QueryFilter<T>) {
    return this.model.deleteOne(filter);
  }
  async getOne(filter: QueryFilter<T>) {
    return this.model.findOne(filter);
  }
}
