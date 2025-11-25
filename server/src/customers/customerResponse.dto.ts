import { CustomerAttributes as ICustomer } from './customer.interface';

export type CustomerResponseDTO = Pick<ICustomer, 'email' | 'id' | 'name' | 'phone'>;
