import { db } from '../db.js';

export const GetAllUsersModel = async () => {
    const SelectQuery = `
    SELECT * 
    FROM users
    `;

    try {
        const [result] = await db.query(SelectQuery);
        return result
    } catch (err) {
        console.error('Error in NewUserModel:', err);
        throw err;
    }
};
