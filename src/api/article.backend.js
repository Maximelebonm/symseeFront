import { InitRequest } from './initrequest';
import ky from 'ky';

export const getAllArticlesApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/article/`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getHomeArticlesApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/article/home`, {
            credentials: 'include'
        });
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const getAticleVisibleApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/article/visible`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getArticleHomeApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/article/home`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getArticleApi = async (id) => {
    try {
        const response = await ky.get(`${InitRequest()}/article/one/${id}`, {
            credentials: 'include'
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}

export const createArticleApi = async (pdata) => {
    try {
        const response = await ky.post(`${InitRequest()}/article/create`, {
            // json: {
            //     title: pTitle,
            //     subtitle: pSubtitle,
            //     description: pDescription,
            //     media: pMedia,
            //     type : pType,
            //     auteur: pAuteur,
            //     visible : pvisible,
            // },
            body: pdata,
            credentials: 'include'
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export const updateArticleApi = async (pdata, id) => {
    try {
        const response = await ky.put(`${InitRequest()}/article/update/${id}`, {
            body: pdata,
            credentials: 'include'
        });
        return response;
    } catch (error) {
        if(error.response.status === 401){
            return error.response;
        }
        else {
            console.log(error); 
        }
    }
}

export const deleteArticleApi = async (id) => {
    try {
        const response = await ky.put(`${InitRequest()}/article/delete/${id}`, {
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}