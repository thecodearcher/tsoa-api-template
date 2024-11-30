import { Controller as TsoaController } from "tsoa";

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export abstract class Controller extends TsoaController {
  async response<T>(
    data: T,
    statusCode: number = 200,
    message: string = "OK"
  ): Promise<ApiResponse<T>> {
    if (data instanceof Promise) {
      data = await data;
    }

    this.setStatus(statusCode);
    return {
      message,
      data,
    };
  }
}
