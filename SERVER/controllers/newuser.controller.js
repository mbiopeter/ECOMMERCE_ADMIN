import { RegisterNewUserService } from "../services/newuser.services.js";
import bcrypt from 'bcrypt';
import multer from 'multer';
import { body } from 'express-validator';

const saltRounds = 10;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const ControlNewUserRegistration = async (req, res) => {
    try {
        upload.single('Image')(req, res, async (err) => {
            if (err) {
                return res.json("Error uploading file");
            }

            const { Username, Fullname, Phonenumber, Email, Password, Address, Country } = req.body;
            const DATE = new Date();

            bcrypt.hash(Password, saltRounds, async (err, hashedPassword) => {
                if (err) {
                    return res.json("Error in hashing the password");
                }
                else {
                    if (
                        body('Fullname').isAlphanumeric().isLength({ min: 3, max: 30 }).trim().length > 1 && body('Email').isEmail().normalizeEmail() && body('Phonenumber').isNumeric()) {

                        const Image = req.file;

                        const results = await RegisterNewUserService(Username, Fullname, Phonenumber, Email, hashedPassword, DATE, Address, Country, Image);

                        return res.json(results);
                    }
                }
            });
        });
    } catch (err) {
        throw err;
    }
};
