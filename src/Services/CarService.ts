import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarModel();
    const newCar = await carODM.create(car);
    return this.createCar(newCar);
  }

  public async getAllCars() {
    const carODM = new CarModel();
    const cars = await carODM.findCar();
    const carsArray = cars.map((car: ICar) => this.createCar(car));
    return carsArray;
  }

  public async getByCar(id: string) {
    const carODM = new CarModel();
    const cars = await carODM.findByCar(id);
    return this.createCar(cars);
  }

  public async updateByCar(id: string, car: ICar) {
    const carODM = new CarModel();
    const cars = await carODM.updateByCar(id, car);
    return this.createCar(cars);
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