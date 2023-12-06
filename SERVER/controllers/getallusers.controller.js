import { GetallUsersService } from "../services/getallusers.services.js";

export const ControlGetAllUsers = async (req, res) => {
    try {
        const results = await GetallUsersService();
        return res.json(results);
    }
    catch (err) {
        throw err;
    }
}