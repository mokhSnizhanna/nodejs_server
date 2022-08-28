import { HttpError, HttpStatus } from "../exceptions/HttpError";

export class AuthHttpError extends HttpError {
  constructor() {
    super(HttpStatus.NOT_AUTHORIZE, 'You are not authorize');
  }
}