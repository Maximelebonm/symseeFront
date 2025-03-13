import { InitRequest } from './initrequest';
import ky from 'ky';

export const getAllArticlesApi = async () => {
    try {
        const response = await ky.get(`${InitRequest()}/article/`, {
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getArticleApi = async (id) => {
    try {
        const response = await ky.get(`${InitRequest()}/article/${id}`, {
            credentials: 'include'
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const createArticleApi = async (pTitle, pSubtitle, pDescription, pMedia, pAuteur, pvisible) => {
    try {
        const response = await ky.post(`${InitRequest()}/article/create`, {
            json: {
                title: pTitle,
                subtitle: pSubtitle,
                description: pDescription,
                media: pMedia,
                auteur: pAuteur,
                visible : pvisible,
            },
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}