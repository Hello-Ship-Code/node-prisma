import { type RequestHandler } from 'express';

import { urls } from '@prisma/client'; // Correct PascalCase Import
import { prisma } from '../../connection';

import HttpError from '../../utils/HttpError';

export type GetUrlHandler = RequestHandler<never, { urls: urls[] }>

export const getUrls: GetUrlHandler = async (_req, res, next) => {
  try {
    const urls = await prisma.urls.findMany()
    if (urls.length === 0) {
      throw new HttpError('no urls found in database', 404)
    }

    res.json({ urls })

  } catch (error) {
    next(error)
  }
}