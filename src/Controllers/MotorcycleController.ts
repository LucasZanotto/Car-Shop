import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyleService();
  }

  public async create() {
    const motorcyle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotorcyle = await this.service.create(motorcyle);
      return this.res.status(201).json(newMotorcyle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycle() {
    const motorcyles = await this.service.getAllMotorcycle();
    return this.res.status(200).json(motorcyles);
  }

  public async findByMotorcycle() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    try {
      const motorcyles = await this.service.findByMotorcycle(id as string);
      if (!motorcyles) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcyles);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateByMotorcycle() {
    const { id } = this.req.params;
    const motorcyle = this.req.body;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    try {
      const motorcyles = await this.service.updateByMotorcycle(id, motorcyle);
      if (!motorcyles) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcyles);
    } catch (error) {
      this.next(error);
    }
  }
}

// {
//   "model": "Marea",
//   "year": 2002,
//   "color": "Black",
//   "status": true,
//   "buyValue": 15.990,
//   "doorsQty": 4,
//   "seatsQty": 5
// }