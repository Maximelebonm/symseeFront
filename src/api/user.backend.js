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
    return response;
    } catch (error) {
        console.log(error);
    }
}

export const logoutUserApi = async () => {
    try {
        const response = await ky.post(`${InitRequest()}/user/logout`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getAuthApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/user/auth`, {
            credentials: 'include'
        });

        return response;
    } catch (error) {
        return error.response;
    }
}

export const getAllUsersApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/user/all`, {
            credentials: 'include'
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}

export const lockUserApi = async (id) => {
    try {
        const response = await ky.put(`${InitRequest()}/user/lock/${id}`, {
            credentials: 'include'
        });
         console.log(response)
        return response;
    } catch (error) {
        console.log(error); // ⚠️ pas de return ici !
    }
}

export const unlockUserApi = async (id) => {
    try {
        const response = await ky.put(`${InitRequest()}/user/unlock/${id}`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getMeApi = async () => {
    const response = await ky.get(`${InitRequest()}/user/me`, {
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Erreur lors de la récupération du profil');
    }

    return response.json();
};

export const updateUserApi = async (id, payload) => {
    try {
        const response = await ky.put(`${InitRequest()}/user/update/${id}`, {
            json: payload,
            credentials: 'include'
        });
        console.log(response)
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
};