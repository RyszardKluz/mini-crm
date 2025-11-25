import { RegisterDTO } from './register.dto';
import { User } from '../users/user.model';
import { UserRepository } from '../users/user.repository';
import { hashPassword, comparePassword } from '../core/utils/hashPassword.util';
import { v4 as uuidV4 } from 'uuid';
import { LoginDTO } from './login.dto';
import { generateToken } from '../core/utils/jwt.util';

export class AuthenticationService {
  register = async (data: RegisterDTO): Promise<User> => {
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
  login = async (data: LoginDTO): Promise<string> => {
    const existingUser = await UserRepository.login(data.email);
    if (!existingUser) {
      throw new Error('No user with this email exists, please try again.');
    }
    const matchingPassword = await comparePassword(data.password, existingUser.password);
    if (!matchingPassword) {
      throw new Error('Invalid password, please try again');
    }
    const token = generateToken({ userId: existingUser.id });
    return token;
  };
}
