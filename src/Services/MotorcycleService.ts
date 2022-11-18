import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcyleService {
  private createMotorcycle(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleModel();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycle(newMotorcycle);
  }

  public async getAllMotorcycle() {
    const motorcycleODM = new MotorcycleModel();
    const motorcycles = await motorcycleODM.findMotorcycle();
    const motorcyclesArray = motorcycles
      .map((motorcycle: IMotorcycle) => this.createMotorcycle(motorcycle));
    return motorcyclesArray;
  }

  public async findByMotorcycle(id: string) {
    const motorcycleODM = new MotorcycleModel();
    const motorcycles = await motorcycleODM.findByMotorcycle(id);
    return this.createMotorcycle(motorcycles);
  }

  public async updateByMotorcycle(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleModel();
    const motorcycles = await motorcycleODM.updateByMotorcycle(id, motorcycle);
    return this.createMotorcycle(motorcycles);
  }
}

// {
//   "model": "Honda Cb 600f Hornet",
//   "year": 2005,
//   "color": "Yellow",
//   "status": true,
//   "buyValue": 30.000,
//   "category": "Street",
//   "engineCapacity": 600
// }