import { Router } from 'express';
import CarController from '../Controllers/CarController';
// import fieldMiddle from '../Middlewares/fieldMiddle';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findCar(),
);

routes.get(
  '/cars/:id', 
  (req, res, next) => new CarController(req, res, next).findByCar(),
);

routes.put(
  '/cars/:id', 
  (req, res, next) => new CarController(req, res, next).updateByCar(),
);

export default routes;