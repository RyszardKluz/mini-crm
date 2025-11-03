import { UserAttributes as IUser } from '../../interfaces/user.interface.js';

export type CreateUserDTO = Pick<IUser, 'name' | 'email' | 'password'>;
