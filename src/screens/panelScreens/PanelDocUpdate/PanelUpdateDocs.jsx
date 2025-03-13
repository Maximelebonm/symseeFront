import { Link,useLocation } from "react-router-dom"
import { updateDocumentApi } from "../../../api/document.backend";
import { useEffect, useState } from "react";
import { getAllTypeDocuments } from "../../../api/typeDocument.backend";
import { configStorage } from "../../../helpers/config";
import { GrDocumentPdf } from "react-icons/gr";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const PanelUpdateDocs = () => {
    const [typeDocuments, setTypeDocuments] = useState([]);
    const [load, setLoad] = useState(false);

    const location = useLocation();
    
    const state = location.state;

    console.log(state)
    
    useEffect(() => {
        const fetch = async() => {
               const response = await getAllTypeDocuments();
               console.log(response);
               if(response){
                   setTypeDocuments(response);
                   setLoad(true)
               }
           }
           fetch();
       },[])
    
       const handleSubmit = async (e) => {
           e.preventDefault();
           const form = e.target;
           const data = new FormData(form);
           const title = data.get('title');
           const subtitle = data.get('subtitle');
           const description = data.get('description');
           const visible = data.get('visible');
           const auteur = data.get('auteur');
           const updated_by = data.get('updated_by');
           const type = data.get('type');
           const file = data.get('file');
           const lastFile = data.get('lastfile');
           console.log(title, subtitle, description, visible, auteur, updated_by, type,lastFile, file);
   
           if(file.type !== 'application/pdf' && file.name !=''){
               alert('fichier non pris en charge');
               return;
           }
            const response = await updateDocumentApi(data,state.Id_document);
            console.log(response);
            if(response.status === 201){
                    toast.success('document mis à jour reload de la page', {autoClose: 2000});
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }

   
       return (
           <div id='panelDocScreenContainer'>
           <ToastContainer/>
                    <Link className='LinkBack' to='/panel/documents/list'>
                        <button>Retour List</button>
                    </Link>
                    <div id='panelDocFormContainer'>
                    <h1>mettre a jour un document</h1>
    
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className='inputContainer'>
                        <label>Titre du document</label>
                        <input type='text' name='title' defaultValue={state.title}></input>
                    </div>
                    <div className='inputContainer'>
                        <label>Sous titre du document</label>
                        <input type='text' name='subtitle' defaultValue={state.subtitle}></input>
                    </div>
                    <div className='inputContainer'>
                        <label>Description du document</label>
                        <input type='text' name='description' defaultValue={state.description}></input>
                    </div>
                    <div className='inputContainer'>
                        <label>Visible</label>
                        <input type='checkbox' name='visible' defaultChecked={state.visible}></input>
                    </div>
                    <div className='inputContainer'>
                        <label>Auteur</label>
                        <input type="text" name="auteur" defaultValue={state.auteur}></input>
                    </div>
                    <div className='inputContainer'>
                        <label>mis à jour par</label>
                        <input type="text" name="updated_by" defaultValue={state.updated_by} required></input>
                    </div>
                   { load && 
                    <div className='inputContainer'>
                   <label>type de document</label>
                        <select name='type' defaultValue={state.typeDocument.Id_typeDocument} >
                            {typeDocuments?.map((item) => {
                                return (
                                    <option value={item.Id_typeDocument} key={item.Id_typeDocument}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>}
                    <div className='inputContainer'>
                        <a href={ configStorage()+ '/'+ state.storage_doc} target='_blank' className="docLink">
                            <div>
                                consulté le document
                            </div>
                            <GrDocumentPdf size={50}/>
                        </a>
                        <input hidden name='lastfile' defaultValue={state.storage_doc}></input>
                    <label> Attention le nouveau document va supprimer l&apos;ancienne version ! </label>
                    <input type='file' name='file'></input>
                    </div>
                        <button type='submit'>Valider</button>
                    </form>
                </div>
           </div>
       )
}