import { Router } from "express";

import { getUserById, getUsers } from "../controllers/users/get-users";
import { postUsers } from "../controllers/users/post-user";

export const userRouter = Router()

userRouter.route('/:id').get(getUserById)
userRouter.route('/').get(getUsers).post(postUsers)