import { Router } from "express";

import { getUrlById, getUrls } from "../controllers/URLS/get-urls";

const useRouter = Router();

useRouter.route('/:id').get(getUrlById)
useRouter.route('/').get(getUrls)

export { useRouter }