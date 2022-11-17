import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class Car {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findCar(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findByCar(_id: string): Promise<ICar | null> {
    return this.model.findOne({ _id });
  }
}