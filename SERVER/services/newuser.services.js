import { NewUserModel } from "../models/newuser.model.js";

export const RegisterNewUserService = async (Username, Fullname, Phonenumber, Email, Password, Date, Address, Country, Image) => {
    try {
        const results = await NewUserModel(Username, Fullname, Phonenumber, Email, Password, Date, Address, Country, Image);
        if (results) {
            return { Signup: true }
        }
        else {
            return { Signup: false }
        }
    }
    catch (err) {
        throw err;
    }
}