import express, { Request, Response } from 'express';
import CustomersController from './controllers/CustomersController';

const routes = express.Router();

const customersController = new CustomersController();

routes.get("/customers/delinquents", (request: Request, response: Response) => customersController.delinquents(request, response));

export default routes;
