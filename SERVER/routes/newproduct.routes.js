import { ControlNewProductRegistration } from "../controllers/newproduct.controller.js";
import express from 'express';

export const router = express.Router();

//http://localhost:${port}/newproduct/
router.post('/', ControlNewProductRegistration, (req, res) => {
    try {
        res.json({ message: 'Product added successfull' });
    }
    catch (err) {
        throw err;
    }
});