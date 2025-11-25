import { UserAttributes as IUser } from './user.interface';

export type UserResponseDTO = Pick<IUser, 'createdAt' | 'email' | 'id' | 'name'>;
