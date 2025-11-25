import { AuthenticationService } from './auth.service';
import { ControllerFunction } from '../core/types/controller.types';
export default class AuthenticationController {
  private readonly authenticationService: AuthenticationService;
  constructor() {
    this.authenticationService = new AuthenticationService();
  }
  register: ControllerFunction = async (req, res) => {
    const user = await this.authenticationService.register(req.body);
    res.status(201).json(user);
  };

  login: ControllerFunction = async (req, res) => {
    const { token, userId, email } = await this.authenticationService.login(req.body);

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res
      .status(200)
      .json({ succes: true, user: { userId, email }, message: 'Login success' });
  };

  authorize: ControllerFunction = async (req, res) => {
    if (!req.userId) throw new Error();
    const user = await this.authenticationService.authorize(req.body);
    res.status(200).json({ success: true, user, message: 'Authorized' });
  };
}
