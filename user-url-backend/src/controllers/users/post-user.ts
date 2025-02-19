import { RequestHandler } from "express";
import { z } from "zod";

import { User } from "@prisma/client";
import { prisma } from "../../connection";

import HttpError from "../../utils/HttpError";

// User Schema Validation
export const userSchema = z.object({
  userName: z.string().min(5, "User name must be at least 5 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string()
    .min(5, "Password must be at least 5 characters long")
    .max(32, "Password should not exceed 32 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
    .regex(/^\S*$/, "Password cannot contain spaces")
});

// Type Definition for Request Handler
export type PostUserHandler = RequestHandler<
  never,
  { user: User } | { error: string },
  { userName: string; email: string; password: string }
>;

// POST /api/user handler
export const postUsers: PostUserHandler = async (req, res, next) => {
  try {
    const data = userSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      next(new HttpError('user already exits', 409))
    }

    const newUser = await prisma.user.create({
      data: {
        userName: data.userName,
        email: data.email,
        password: data.password,
      },
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    next(error);
  }
};
