import { InitRequest } from './initrequest';
import ky from 'ky';

export const loginUserApi = async (email, password) => {
    try {
        const response = await ky.post(`${InitRequest()}/user/login`,{
            json: 
            {
                email: email, 
                password: password
            },
        credentials: 'include'
    });
    return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getUserApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/user/802d6b89-b7ef-479c-93e1-5b5912678b6c`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}