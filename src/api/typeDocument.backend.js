import { InitRequest } from "./initrequest";
import ky from "ky";

export const getAllTypeDocuments = async () => {
    try {
        const response = ky.get(`${InitRequest()}/typeDocument`, {
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getTypeDocument = async (id) => {
    try {
        const response = ky.get(`${InitRequest()}/typeDocument/${id}`, {
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const createTypeDocumentApi = async (name) => {
    try {
        const response = await ky.post(`${InitRequest()}/typeDocument/create`, {
            json: {
                name: name,
            },
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const updateTypeDocumentApi = async (id, pName) => {
    try {
        const response = await ky.put(`${InitRequest()}/typeDocument/${id}`, {
            json: {
                name: pName,

            },
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

