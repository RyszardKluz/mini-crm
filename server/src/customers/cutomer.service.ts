import { CustomerRepository } from './customer.repository';
import { CreateCustomerDTO } from './createCustomer.dto';
import { Customer } from './customer.model';
import { v4 as uuidV4 } from 'uuid';
import { AppError } from '../core/errors/app-error';
import { UpdateCustomerDTO } from './updateCustomer.schema';
import { FilterCustomerDTO } from './filterCustomer.schema';
import { CustomerResponseDTO } from './customerResponse.dto';
import { buildCustomerWhere } from './buildCustomerWhere';

export class CustomerService {
  private mapCustomer(customers: Customer[]): CustomerResponseDTO[] {
    return customers.map(customer => ({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      userId: customer.userId,
      status: customer.status,
      phone: customer.phone || '',
    }));
  }
  createCustomer = async (data: CreateCustomerDTO): Promise<Customer> => {
    const exists = await CustomerRepository.findByEmail(data.email);
    if (exists) {
      throw new AppError('Customer with this e-mail already exists!', 400);
    }
    const customerId = uuidV4();
    const dataTransfer = { ...data, id: customerId };
    const newCustomer = await CustomerRepository.createCustomer(dataTransfer);

    return newCustomer;
  };
  deleteCustomer = async (id: string, userId: string): Promise<void> => {
    const customer = await CustomerRepository.findById(id);
    if (!customer) throw new AppError('Customer not found', 404);

    if (customer.userId !== userId) throw new AppError('Access denied', 403);
    await CustomerRepository.deleteById(id);
  };
  findAllCustomers = async (userId: string): Promise<CustomerResponseDTO[]> => {
    const customers = await CustomerRepository.findAll({ userId });
    return this.mapCustomer(customers);
  };
  editCustomer = async (
    id: string,
    editData: UpdateCustomerDTO,
    userId: string,
  ): Promise<string> => {
    const exists = await CustomerRepository.findById(id);
    if (!exists) {
      throw new AppError('Customer not found', 404);
    }
    if (exists.userId !== userId) {
      throw new AppError('Access denied', 403);
    }
    const affected = await CustomerRepository.updateById(id, editData);
    return affected > 0 ? 'UPDATED' : 'NO_CHANGES';
  };
  searchCustomers = async (
    filters: FilterCustomerDTO,
    userId: string,
  ): Promise<CustomerResponseDTO[]> => {
    const where = buildCustomerWhere({ ...filters, userId });

    const customers = await CustomerRepository.filterByQuery(where);
    if (!customers || customers.length === 0) {
      return [];
    }
    return this.mapCustomer(customers);
  };
}
