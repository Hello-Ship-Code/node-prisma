import { RequestHandler } from "express";
import shortid from "shortid";
import { z } from "zod";

import { Url, Visit } from "@prisma/client";
import { prisma } from "../../connection";

import HttpError from "../../utils/HttpError";

const postUrlSchema = z.object({
  redirectUrl: z.string().url("invalid url format"),
});

export type PostUrlHandler = RequestHandler<
  never,
  { url: (Url & { visitHistory: Visit[] }) } | { error: string },
  { redirectUrl: string },
  never
>;

export const postUrl: PostUrlHandler = async (req, res, next) => {
  try {
    const { redirectUrl } = postUrlSchema.parse(req.body); // Use the correct schema

    if (!redirectUrl) throw new HttpError('url required', 404)
    const shortId = shortid.generate();

    const url: Url & { visitHistory: Visit[] } = await prisma.url.create({
      data: {
        shortId,
        redirectUrl,
        visitHistory: { create: [] } // ✅ Fixed visitHistory type
      },
      include: { visitHistory: true }
    });

    res.json({ url });
  } catch (error) {
    next(error);
  }
};
