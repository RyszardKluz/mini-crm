import { AppError } from '../core/errors/app-error';
import { ControllerFunction } from '../core/types/controller.types';
import { CustomerService } from './cutomer.service';

export class CustomerController {
  private readonly customerService: CustomerService;
  constructor() {
    this.customerService = new CustomerService();
  }
  create: ControllerFunction = async (req, res, next) => {
    try {
      const customer = await this.customerService.createCustomer(req.body);
      res.status(201).json({ message: 'Customer created', customer });
    } catch (error) {
      next(error);
    }
  };
  delete: ControllerFunction = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw new AppError('Missing customer id', 400);
      }
      await this.customerService.deleteCustomer(id, req.userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
  getAll: ControllerFunction = async (req, res, next) => {
    try {
      const customers = await this.customerService.findAllCustomers(req.userId);
      res.status(200).json({ message: 'Sucessfully found all customers!', customers });
    } catch (error) {
      next(error);
    }
  };
  update: ControllerFunction = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) throw new AppError('Missing customer ID', 400);
      const result = await this.customerService.editCustomer(id, req.body, req.userId);
      if (result === 'UPDATED') {
        res.status(200).json({ message: 'Customer edited sucessfully' });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      next(error);
    }
  };
  search: ControllerFunction = async (req, res, next) => {
    try {
      const customers = await this.customerService.searchCustomers(req.body, req.userId);
      res.status(200).json({ message: 'Customers successfully found', customers });
    } catch (error) {
      next(error);
    }
  };
}
