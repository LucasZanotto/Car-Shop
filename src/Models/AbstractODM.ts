import { Model, Schema, model, models, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(modelName: T): Promise<T> {
    return this.model.create({ ...modelName });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<T | null> {
    return this.model.findOne({ _id }, { __v: false });
  }

  public async updateById(_id: string, modelName: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...modelName } as UpdateQuery<T>,
      { new: true },
    );
  }
}