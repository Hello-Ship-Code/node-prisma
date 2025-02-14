import { type Response, type Request, type NextFunction } from 'express-serve-static-core';

export const errorHandler = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction,

) => {
  const HttpStatus = error.statusCode || 505;
  const message = error.message || 'Internal Pointer Error'

  res.status(HttpStatus).json({
    success: false,
    statusCode: HttpStatus,
    message,
    error: process.env.NODE_ENV === "development" ? error.stack : undefined,
  })

}