import { InitRequest } from './initrequest';
import ky from 'ky';

export const getAllAppelDoffreApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/appeldoffre/`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getAppelDoffreApi = async (id) => {
    try {
        const response = await ky.get(`${InitRequest()}/appeldoffre/${id}`, {
            credentials: 'include'
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const createAppelDoffreApi = async (pTitle, pDescription, pAddresse,pDateLimite, pvisible, plien,pStructure) => {
    try {
        const response = await ky.post(`${InitRequest()}/appeldoffre/create`, {
            json: {
                title: pTitle,
                description: pDescription,
                addresse : pAddresse,
                datelimite : pDateLimite,
                visible : pvisible,
                lien : plien,
                structure: pStructure,
            },
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const updateAppelDoffreApi = async (pTitle, pDescription, pAddresse,pDateLimite, pvisible, plien,pStructure , id) => {
    try {
        const response = await ky.put(`${InitRequest()}/appeldoffre/update/${id}`, {
            json: {
                title: pTitle,
                description: pDescription,
                addresse : pAddresse,
                datelimite : pDateLimite,
                visible : pvisible,
                lien : plien,
                structure: pStructure,
            },
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteAppelDoffreApi = async (id) => {
    try {
        const response = await ky.delete(`${InitRequest()}/appeldoffre/delete/${id}`, {
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}