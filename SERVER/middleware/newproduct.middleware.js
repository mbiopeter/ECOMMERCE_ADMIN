import { router } from "../routes/newproduct.routes.js";
import express from 'express';

export const newProductRouter = express.Router();

newProductRouter.use('/newproduct', router);