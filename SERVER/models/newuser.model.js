import { db } from '../db.js';

export const NewUserModel = async (Username, Fullname, Phonenumber, Email, Password, Date, Address, Country, Image) => {
    const InsertQuery = `
    INSERT INTO users(USERNAME, FULLNAME, PHONENUMBER, EMAIL, PASSWORD, DATE, ADDRESS, COUNTRY, PROFILEPICTURE)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const SelectQuery = `
    SELECT * 
    FROM users 
    WHERE EMAIL = ? OR PHONENUMBER = ?
    `;

    try {
        const [CheckUserExistence] = await db.query(SelectQuery, [Email, Phonenumber]);

        if (CheckUserExistence.length <= 0) {
            const filename = Image.originalname;
            const [result] = await db.query(InsertQuery, [Username, Fullname, Phonenumber, Email, Password, Date, Address, Country, filename]);
            return result;
        } else {
            return { error: 'User already exists' };
        }
    } catch (err) {
        console.error('Error in NewUserModel:', err);
        throw err;
    }
};
