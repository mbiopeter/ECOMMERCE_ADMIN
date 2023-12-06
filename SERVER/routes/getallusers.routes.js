import { ControlGetAllUsers } from "../controllers/getallusers.controller.js";
import express from "express";

export const router = express.Router();

//http://localhost:${port}/allusers/
router.get('/', ControlGetAllUsers, (req, res) => {
    try {
        res.json({ message: 'User Found' });
    }
    catch (err) {
        throw err
    }
});

