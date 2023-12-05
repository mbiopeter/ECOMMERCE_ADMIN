import { router } from "../routes/newuser.routes.js";
import express from 'express';

export const newRouter = express.Router();

newRouter.use('/newuser', router);