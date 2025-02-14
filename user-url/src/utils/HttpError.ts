
export default class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message); // Call the parent class constructor with the message
    this.statusCode = statusCode;

    // Set the prototype explicitly to support instance of checking
    Object.setPrototypeOf(this, HttpError.prototype);
  }

  // Static method to create a new HttpError instance
  static from(message: string, status: number): HttpError {
    return new HttpError(message, status);
  }
}
