import IMotorcyle from '../Interfaces/IMotorcycle';
// import Vehicle from './Vehicle';

export default class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(motorcyle : IMotorcyle) {
    this.id = motorcyle.id;
    this.model = motorcyle.model;
    this.year = motorcyle.year;
    this.color = motorcyle.color;
    if (motorcyle.status) { 
      this.status = motorcyle.status; 
    } else {
      this.status = false;
    }
    this.buyValue = motorcyle.buyValue;
    this.category = motorcyle.category;
    this.engineCapacity = motorcyle.engineCapacity;
  }

  public getId(): string | undefined {
    return this.id;
  }
  public setId(value: string | undefined) {
    this.id = value;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }

  public getYear(): number {
    return this.year;
  }
  public setYear(value: number) {
    this.year = value;
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