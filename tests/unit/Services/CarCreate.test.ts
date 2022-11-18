import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testando a rota Car', function () {
  it('Criando um objeto Car', async function () {
    const keyInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const keyOutput: Car = new Car(
      { model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5 },
    );
    sinon.stub(Model, 'create').resolves(keyOutput);
    const service = new CarService();
    const result = await service.create(keyInput);
    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Testando a chamada do find', async function () {
    const keyInput: ICar[] = [{
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }];
    const keyOutput = keyInput.map((att: ICar) => new Car(att));
    sinon.stub(Model, 'find').resolves(keyOutput);
    const service = new CarService();
    const result = await service.getAllCars();
    expect(result).to.be.deep.equal(keyOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});