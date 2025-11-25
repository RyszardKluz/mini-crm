import { User } from './user.model';
import { RegisterDTO } from '../auth/register.dto';

export class UserRepository {
  static createUser = async (data: RegisterDTO): Promise<User> => {
    const newUser = await User.create({ ...data });
    return newUser;
  };
  static findByEmail = async (email: string): Promise<User | null> => {
    const exists = await User.findOne({ where: { email } });
    return exists;
  };

  static login = async (email: string): Promise<User | null> => {
    const user = await User.findOne({
      where: { email },
    });
    return user;
  };
}
