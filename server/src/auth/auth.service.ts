import { RegisterDTO } from './register.dto';
import { User } from '../users/user.model';
import { UserRepository } from '../users/user.repository';
import { hashPassword, comparePassword } from '../core/utils/hashPassword.util';
import { v4 as uuidV4 } from 'uuid';
import { LoginDTO } from './login.dto';
import { generateToken } from '../core/utils/jwt.util';
import { AuthorizeDTO } from './authorize.dto';
import { AuthorizeResponseDTO } from './authorizeResponse.dto';
import { UserResponseDTO } from '../users/userResponse.dto';
import { AppError } from '../core/errors/app-error';

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
      throw new AppError('User with this email already exists!', 400);
    }
    const createdUser = await UserRepository.createUser(dataTransfer);
    return createdUser;
  };
  login = async (data: LoginDTO): Promise<AuthorizeResponseDTO> => {
    const existingUser = await UserRepository.login(data.email);
    if (!existingUser) {
      throw new AppError('No user with this email exists, please try again.', 401);
    }
    const matchingPassword = await comparePassword(data.password, existingUser.password);
    if (!matchingPassword) {
      throw new AppError('Invalid password, please try again', 401);
    }
    const token = generateToken({ userId: existingUser.id });
    const dataTransfer = { token, userId: existingUser.id, email: existingUser.email };
    return dataTransfer;
  };
  authorize = async (data: AuthorizeDTO): Promise<UserResponseDTO> => {
    const user = await UserRepository.findById(data.userId);
    if (!user) {
      throw new AppError('Authentication failure!', 500);
    }
    const dataTransfer = { userId: user.id, email: user.email };
    return dataTransfer;
  };
}
