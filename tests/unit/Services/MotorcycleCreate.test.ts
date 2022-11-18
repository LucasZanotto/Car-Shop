import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testando a rota motorcycle', function () {
  it('Criando um objeto de motorcycle', async function () {
    // Arrange
    const keyInput: IMotorcycle = {
      model: 'Honda HB200',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const keyOutput: Motorcycle = new Motorcycle(
      {
        model: 'Honda Cb300',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    );
    sinon.stub(Model, 'create').resolves(keyOutput);
    const service = new MotorcycleService();
    const result = await service.create(keyInput);
    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Testando a chamada do find', async function () {
    const keyInput: IMotorcycle[] = [{
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    },
    {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    }];
    const keyOutput = keyInput.map((att: IMotorcycle) => new Motorcycle(att));
    sinon.stub(Model, 'find').resolves(keyOutput);
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycle();
    expect(result).to.be.deep.equal(keyOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});