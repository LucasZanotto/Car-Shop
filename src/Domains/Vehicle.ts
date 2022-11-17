export default class Vehicle {
  protected _doorsQty: number;
  protected _seatsQty: number;

  constructor(doorsQty: number, seatsQty: number) {
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }
}