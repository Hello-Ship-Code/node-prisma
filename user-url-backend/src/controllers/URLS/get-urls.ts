import { type RequestHandler } from 'express';

import { Url, Visit } from '@prisma/client'; // Correct PascalCase Import
import { prisma } from '../../connection';

import HttpError from '../../utils/HttpError';

export type GetUrlHandler = RequestHandler<never, { urls: (Url & { visitHistory: Visit[] })[] }>
// export type GetUrlByIdHandler = RequestHandler<{ shortId: string }, { urls: (Url & { visitHistory: Visit[] }) }>
export type GetUrlByIdHandler = RequestHandler<
  { shortId: string },
  { url: Url; visitCount: number }
>;

export const getUrlById: GetUrlByIdHandler = async (req, res, next) => {
  try {
    const shortId = req.params.shortId.trim()
    if (!shortId) throw new HttpError('url id required', 404)

    const result = await prisma.url.update({
      where: { shortId },
      data: {
        visitHistory: {
          create: {
            timestamp: new Date,
          },
        },
      },
      // include: { visitHistory: true }
      select: {
        id: true,
        shortId: true,
        redirectUrl: true,
        createdAt: true,
      },
    })

    if (!result) throw new HttpError('no urls found', 404)
    // res.json({ urls: result })

    const visitCount = await prisma.visit.count({
      where: {
        urlId: result.id,
      },
    });

    res.json({ url: result, visitCount });

  } catch (error) {
    next(error)
  }
}

export const getUrls: GetUrlHandler = async (_req, res, next) => {
  try {
    const urls = await prisma.url.findMany({ include: { visitHistory: true } })

    if (urls.length === 0) {
      throw new HttpError('no urls found in database', 404)
    }

    res.json({ urls })

  } catch (error) {
    next(error)
  }
}