import { RegisterNewProductService } from "../services/newproduct.services.js";
import multer from 'multer';
import { body } from 'express-validator';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const ControlNewProductRegistration = async (req, res) => {
    try {
        upload.single('Image')(req, res, async (err) => {
            if (err) {
                return res.json("Error uploading file");
            }

            const { Product, Description, Category, Price, Prevprice, Stock, Cost, Serial, } = req.body;
            const DATE = new Date();
            if (
                body('Product').isAlphanumeric().isLength({ min: 3, max: 30 }).trim() && body('Price').isNumeric() && body('Price').isNumeric() && body('Prevprice').isNumeric() && body('Stock').isNumeric() && body('Cost').isNumeric()) {

                const Image = req.file;


                const results = await RegisterNewProductService(Product, Description, Category, Price, Prevprice, Stock, Cost, Serial, DATE, Image);

                return res.json(results);
            }
        });
    } catch (err) {
        throw err;
    }
};
