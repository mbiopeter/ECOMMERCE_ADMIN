import { router } from "../routes/getallusers.routes.js";
import express from 'express';

export const AllUsersRouter = express.Router();

AllUsersRouter.use('/allusers', router);