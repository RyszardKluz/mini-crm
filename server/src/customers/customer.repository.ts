import { Customer } from './customer.model';
import { CreateCustomerDTO } from './createCustomer.dto';

class CustomerRepository {
  static createCustomer = (customerInfo: CreateCustomerDTO): Promise<Customer> => {};
}
