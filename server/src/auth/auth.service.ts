import { CreateUserDTO } from '../users/createUser.dto';
import { User } from '../users/user.model';
import { UserRepository } from '../users/user.repository';
import { hashPassword } from '../core/utils/hashPassword.util';
import { v4 as uuidV4 } from 'uuid';
export class AuthenticationService {
  register = async (data: CreateUserDTO): Promise<User> => {
    const hashedPassword = await hashPassword(data.password);
    const id = uuidV4();

    const dataTransfer = {
      password: hashedPassword,
      name: data.name,
      email: data.email,
      id,
    };
    const exists = await UserRepository.findByEmail(data.email);
    if (exists) {
      throw new Error('User with this email already exists!');
    }
    const createdUser = await UserRepository.createUser(dataTransfer);
    return createdUser;
  };
}
