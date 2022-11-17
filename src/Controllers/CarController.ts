import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findCar() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async findByCar() {
    const { id } = this.req.params;
    const cars = await this.service.getByCar(id as string);
    if (!cars) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    if (!isValidObjectId(id)) {
      return this.res.status(402).json({ message: 'Invalid mongo id' });
    }
    return this.res.status(200).json(cars);
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