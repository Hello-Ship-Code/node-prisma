import { Request, Response, RequestHandler, NextFunction } from 'express'

import { prisma } from '../../connection';

import HttpError from '../../utils/HttpError';

export type GetHandler = RequestHandler<{
  id: string;
}>;

export const getUrls = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.users.findMany()
    res.json({ users });
  } catch (err) {
    next(err)
  }
}

export const getUrlById: GetHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new HttpError("url id required", 404);
    }

    const user = await prisma.users.findUnique({ where: { id: id } })

    if (!user) {
      return next(new HttpError("User not found", 404));
    }

    res.json({ user });
  } catch (err) {
    next(err)
  }
}
