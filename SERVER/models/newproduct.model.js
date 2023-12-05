import { db } from '../db.js';

export const NewProductModel = async (Product, Description, Category, Price, Prevprice, Stock, Cost, Serial, Date, Image) => {
    const InsertQuery = `
    INSERT INTO products(PRODUCT, DESCRIPTION, CATEGORY, PRICE, PREVPRICE, STOKE, COST, SERIAL, INSERTDATE, IMAGE)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const SelectQuery = `
    SELECT * 
    FROM products
    WHERE SERIAL = ? 
    `;

    try {
        const [CheckProductExistence] = await db.query(SelectQuery, [Serial]);

        if (CheckProductExistence.length <= 0) {
            const filename = Image.originalname;
            const [result] = await db.query(InsertQuery, [Product, Description, Category, Price, Prevprice, Stock, Cost, Serial, Date, filename]);
            return result;
        } else {
            return { error: 'Product already exists' };
        }
    } catch (err) {
        console.error('Error in NewProductModel:', err);
        throw err;
    }
};
