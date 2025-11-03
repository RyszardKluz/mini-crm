import { UserAttributes as IUser } from './user.interface.js';

export interface CustomerAttributes {
  id: string;
  name: string;
  email: string;
  status: string;
  phone?: number;
  userId: string;
}
