import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
export default class AuthenticationController {
  private readonly authenticationService: AuthenticationService;
  constructor() {
    this.authenticationService = new AuthenticationService();
  }
  register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.authenticationService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      next((error as Error).message);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = await this.authenticationService.login(req.body);
      res.status(200).json({ accessToken: token });
    } catch (error) {
      next(error);
    }
  };
}
