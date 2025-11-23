export class AppError extends Error {
  constructor(
    public readonly message: string | 'Internal server error!',
    public readonly statusCode: number | 500,
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}
