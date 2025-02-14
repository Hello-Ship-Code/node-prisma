import { Router } from "express";

import { getUrlById, getUrls } from "../controllers/URLS/get-urls";

const appRouter = Router()

appRouter.route('/user/:id').get(getUrlById)
appRouter.route('/user').get(getUrls)

appRouter.route('/url')

export { appRouter }
