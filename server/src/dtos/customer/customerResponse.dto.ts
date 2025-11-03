import { CustomerAttributes as ICustomer } from '../../interfaces/customer.interface.js';

export type CustomerResponseDTO = Pick<ICustomer, 
'email' | 'id' | 'name' | 'phone'>;
