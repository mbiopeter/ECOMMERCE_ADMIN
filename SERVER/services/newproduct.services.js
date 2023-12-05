import { NewProductModel } from "../models/newproduct.model.js";

export const RegisterNewProductService = async (Product, Description, Category, Price, Prevprice, Stock, Cost, Serial, Date, Image) => {
    try {
        const results = await NewProductModel(Product, Description, Category, Price, Prevprice, Stock, Cost, Serial, Date, Image);
        if (results) {
            return { Newproduct: true }
        }
        else {
            return { Newproduct: false }
        }
    }
    catch (err) {
        throw err;
    }
}