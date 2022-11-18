import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleModel {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { collection: 'Motorcycle',
      versionKey: false, // here
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async findMotorcycle(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findByMotorcycle(_id: string): Promise<IMotorcycle | null> {
    return this.model.findOne({ _id }, { __v: false });
  }

  public async updateByMotorcycle(
    _id: string,
    motorcycle: IMotorcycle,
  ): Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { motorcycle },
      { new: true },
    );
  }
}