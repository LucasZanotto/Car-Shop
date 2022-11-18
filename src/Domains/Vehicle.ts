import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    if (vehicle.status) { 
      this.status = vehicle.status; 
    } else {
      this.status = false;
    }
    this.buyValue = vehicle.buyValue;
  }

  getId(): string | undefined {
    return this.id;
  }
  setId(value: string | undefined) {
    this.id = value;
  }

  public getYear(): number {
    return this.year;
  }
  public setYear(value: number) {
    this.year = value;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }

  public getColor(): string {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }

  public getStatus(): boolean {
    return this.status;
  }
  public setStatus(value: boolean) {
    this.status = value;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }
  public setBuyValue(value: number) {
    this.buyValue = value;
  }
}