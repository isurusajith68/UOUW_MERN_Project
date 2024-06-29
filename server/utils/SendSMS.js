import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const sendUsernamePassword = async (firstName, lastName, phoneNumber) => {
    const password = generatePassword();
    const phone = validPhoneNumber(phoneNumber);

    const message = `Dear ${firstName} ${lastName}, Your password is ${password}. Please keep it safe.`;

    console.log(message, phone, password);
    console.log(process.env.USER_ID);

    const url = `https://app.notify.lk/api/v1/send`;

    const params = {
        user_id: process.env.USER_ID,
        api_key: process.env.NOTFY_API_KEY,
        
        sender_id: process.env.SENDER_ID,  // Make sure to add this line
        to: phone,
        message: message
    };

    try {
        const res = await axios.post(url, null, { params });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};

const validPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith('0')) {
        return phoneNumber.replace('0', '94');
    }
    return phoneNumber;
};

const generatePassword = () => {
    const password = Math.random().toString(36).slice(-8);
    return password;
};
