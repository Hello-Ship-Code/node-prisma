import { type RequestHandler } from 'express';

import { users } from '@prisma/client'; // Correct PascalCase Import
import { prisma } from '../../connection';

import HttpError from '../../utils/HttpError';

export type GetUserHandler = RequestHandler<{ id: string }, { user: users }>;
export type GetUsersHandler = RequestHandler<never, { users: users[] }>;

export const getUsers: GetUsersHandler = async (_req, res, next) => {
  try {
    const users = await prisma.users.findMany();

    if (users.length === 0) {
      throw new HttpError('No users in database', 404);
    }

    res.json({ users });
  } catch (err) {
    next(err);
  }
};

export const getUserById: GetUserHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new HttpError("URL id required", 400);
    }

    const user = await prisma.users.findUnique({ where: { id } });

    if (!user) {
      throw new HttpError("User not found", 404);
    }

    res.json({ user });
  } catch (err) {
    next(err);
  }
};
