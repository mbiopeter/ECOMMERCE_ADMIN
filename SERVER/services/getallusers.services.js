import { GetAllUsersModel } from "../models/getallusers.model.js";

export const GetallUsersService = async () => {
    try {
        const results = await GetAllUsersModel();
        if (results) {
            return { results }
        }
        else {
            return { GetAllUsers: false }
        }
    }
    catch (err) {
        throw err;
    }
}