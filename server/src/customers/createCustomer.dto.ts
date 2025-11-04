import { CustomerAttributes } from '../interfaces/customer.interface.js';

export type CreateCustomerDTO = Pick<
  CustomerAttributes,
  'name' | 'email' | 'phone' | 'userId'
>;
