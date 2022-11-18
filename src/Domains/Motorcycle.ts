import IMotorcyle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle : IMotorcyle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getCategory(): string {
    return this.category;
  }
  public setCategory(value: string) {
    this.category = value;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
  public setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}