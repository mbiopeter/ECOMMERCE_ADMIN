import { router } from "../routes/newuser.routes.js";
import express from 'express';

export const newUserRouter = express.Router();

newUserRouter.use('/newuser', router);