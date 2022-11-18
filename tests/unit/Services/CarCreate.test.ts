import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Deveria tentar uma chave', function () {
  it('Criando uma chave de tipo Phone Number com SUCESSO', async function () {
    // Arrange
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

    // Act
    const service = new CarService();
    const result = await service.create(keyInput);

    // Assert
    expect(result).to.be.deep.equal(keyOutput);
  });
});