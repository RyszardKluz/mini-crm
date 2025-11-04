import { UserAttributes as IUser } from './user.interface';

export type CreateUserDTO = Pick<IUser, 'name' | 'email' | 'password'>;
