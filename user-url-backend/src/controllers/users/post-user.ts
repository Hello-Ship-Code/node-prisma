import { RequestHandler } from "express";
import { z } from 'zod'

import { users } from "@prisma/client";
import { prisma } from "../../connection";

export const userSchema = z.object({
  firstName: z.string().min(4, "first name must be at least 4 character"),
  lastName: z.string().min(4, "last name must be at least 4 character"),
  email: z.string().email("Invalid Email Format"),
  gender: z.string().min(2, "last name must be at least 2 character"),
  jobTitle: z.string().min(2, "last name must be at least 2 character"),

})

export type PostHandler = RequestHandler<never, { user: users }, { firstName: string, lastName: string, gmail: string, gender: string, jobTitle: string }>

export const postUsers: PostHandler = async (req, res, next) => {
  try {
    const data = userSchema.parse(req.body);

    const user = await prisma.users.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        gender: data.gender,
        jobTitle: data.jobTitle
      },
    })

    res.json({ user })
  } catch (error) {
    next(error)
  }
}