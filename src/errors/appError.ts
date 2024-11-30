interface AppErrorParams {
  message: string;
  data?: any;
  statusCode?: number;
}

export class AppError extends Error {
  public statusCode: number;
  public data: any;

  constructor({ message, data = null, statusCode = 400 }: AppErrorParams) {
    super(message);
    Error.captureStackTrace(this, AppError);
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
