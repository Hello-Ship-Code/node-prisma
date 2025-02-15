import { Router } from "express";

import { getUrls } from "../controllers/urls/get-urls";
import { getUserById, getUsers } from "../controllers/users/get-users";
import { postUsers } from "../controllers/users/post-user";

const appRouter = Router()

appRouter.route('/user/:id').get(getUserById)
appRouter.route('/user').get(getUsers).post(postUsers)

appRouter.route('/url').get(getUrls)

export { appRouter }
