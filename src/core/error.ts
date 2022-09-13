import { CustomError } from 'ts-custom-error';

export default abstract class ApplicationError extends CustomError {
  constructor(message: string, context?: Function, name?: string) {
    super(`${name ? `${name} - ` : ''}${message}`);
    Error.captureStackTrace(this, context);
  }
}
