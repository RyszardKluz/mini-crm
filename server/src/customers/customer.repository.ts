import { Customer } from './customer.model';
import { CreateCustomerDTO } from './createCustomer.dto';
import { UpdateCustomerDTO } from './updateCustomer.schema';
import { WhereOptions } from 'sequelize';

export class CustomerRepository {
  static findByEmail = async (email: string): Promise<Customer | null> => {
    const existingCustomer = await Customer.findOne({ where: { email } });
    return existingCustomer;
  };
  static findById = async (id: string): Promise<Customer | null> => {
    const customer = await Customer.findByPk(id);
    return customer;
  };
  static createCustomer = async (customerData: CreateCustomerDTO): Promise<Customer> => {
    const newClient = await Customer.create({ ...customerData });
    return newClient;
  };
  static findAll = async (where: WhereOptions<Customer>): Promise<Customer[]> => {
    const customers = await Customer.findAll({ where });
    return customers;
  };
  static deleteById = async (id: string): Promise<number> => {
    const deleteCount = await Customer.destroy({ where: { id } });
    return deleteCount;
  };
  static updateById = async (
    id: string,
    updatedData: UpdateCustomerDTO,
  ): Promise<number> => {
    const [affected] = await Customer.update(updatedData, { where: { id } });
    return affected;
  };
  static filterByQuery = async (where: WhereOptions<Customer>): Promise<Customer[]> => {
    const customers = Customer.findAll({ where: where });
    return customers;
  };
}
