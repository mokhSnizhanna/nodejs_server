export abstract class HttpError extends Error {
  statusCode:HttpStatus;

  constructor(status: HttpStatus, message: string) {
    super(message);
    this.statusCode = status;
  }
}

export enum HttpStatus {
  SUCCSESS = 200,
  NOT_FOUND = 404,
  NOT_AUTHORIZE = 401,
  SERVER_ERROR = 500,
}