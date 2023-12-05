import { ControlNewUserRegistration } from "../controllers/newuser.controller.js";
import express from 'express';

export const router = express.Router();

//http://localhost:${port}/newuser/
router.post('/', ControlNewUserRegistration, (req, res) => {
    try {
        res.json({ message: 'user added successfull' });
    }
    catch (err) {
        throw err;
    }
});