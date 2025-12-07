import { authenticate } from '../core/middlewares/authenticate.middleware';
import { validateSchema } from '../core/middlewares/validateSchema.middleware';
import { Router } from 'express';
import { createCustomerSchema } from './createCustomer.dto';
import { CustomerController } from './customer.controller';
import { updateCustomerSchema } from './updateCustomer.schema';
import { filterCustomerSchema } from './filterCustomer.schema';

const customerController = new CustomerController();
export const customerRoutes = Router();

customerRoutes.post(
  '/create',
  authenticate,
  validateSchema(createCustomerSchema),
  customerController.create,
);
customerRoutes.post(
  '/search',
  authenticate,
  validateSchema(filterCustomerSchema),
  customerController.search,
);
customerRoutes.get('/', authenticate, customerController.getAll);
customerRoutes.delete('/:id', authenticate, customerController.delete);
customerRoutes.patch(
  '/:id',
  authenticate,
  validateSchema(updateCustomerSchema),
  customerController.update,
);
