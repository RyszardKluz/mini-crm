import { UserAttributes as IUser } from '../../interfaces/user.interface.js';

export type UserResponseDTO = Pick<IUser, 'createdAt' | 'email' | 'id' | 'name'>;
