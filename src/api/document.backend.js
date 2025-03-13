import ky from "ky";
import { InitRequest } from "./initrequest";

export const getAllDocuments = async () => {
   try {
       const response = ky.get(`${InitRequest()}/document`, {
           credentials: 'include'
       });
         return response.json();
   } catch (error) {
       console.log(error);
   }
}

export const getDocument = async (id) => {
   try {
       const response = ky.get(`${InitRequest()}/document/${id}`, {
           credentials: 'include'
       });
         return response.json();
   } catch (error) {
       console.log(error);
   }
}

export const createDocumentApi = async (pAllForm) => {
   try {
       const response = await ky.post(`${InitRequest()}/document/create`, {
           body: pAllForm,
           credentials: 'include'
       });
       return response.json() ;
   } catch (error) {
       console.log(error);
   }
}

export const updateDocumentApi = async (pAllForm,id) => {
   try {
       const response = await ky.put(`${InitRequest()}/document/update/${id}`, {
        body: pAllForm,
           credentials: 'include'
       });
       return response;
   } catch (error) {
       console.log(error);
   }
}

export const deleteDocumentApi = async (id) => {
   try {
       const response = await ky.put(`${InitRequest()}/document/delete/${id}`, {
           credentials: 'include'
       });
       return response;
   } catch (error) {
       console.log(error);
   }
}