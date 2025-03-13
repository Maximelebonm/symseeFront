import { Link } from "react-router-dom";
import {useEffect, useState } from 'react';
import { GrDocumentPdf } from "react-icons/gr";
import { getAllDocuments } from '../../../api/document.backend';
import './panelDocList.css';
import { configStorage } from '../../../helpers/config';
import { Modal } from '../../../components/modal/Modal';
import { deleteDocumentApi } from '../../../api/document.backend';
import { ToastContainer, toast } from "react-toastify";

export const PanelDocList = () => {
const [documents, setDocuments] = useState([]);

const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetch = async() => {
            const response = await getAllDocuments() ;
            console.log(response);
            if(response){
                setDocuments(response.data);
            }
        }
        fetch();
    }
    , []);

    const handleDelete = async(id) => {
        const response = await deleteDocumentApi(id);
        console.log(response);
        if(response.status === 201){
            toast.success('document supprimé', {autoClose: 2000});
            setTimeout(() => {
                window.location.href = '/panel/documents/list';
            }, 2000);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    return (
        <div id="DocScreenConainter">
        <ToastContainer />
        <Link className='LinkBack' to='/panel'>
        <button>Retour Home</button></Link>
            {documents.map((doc, index) => {
                const date = formatDate(doc.created_date
                );
                {/* date.getFullYear(); */}
                return (
                    <div key={index} className='docContainer'>
                        <div>
                            <p>{date}</p>
                            <h1>{doc.title}</h1>
                            <h2>{doc.subtitle}</h2>
                            <p>{doc.description}</p>
                            <p>{doc.visible}</p>
                            <p>{doc.auteur}</p>
                            <div>
                            <p>Type de document</p>
                            <p>{doc.typeDocument.name}</p>
                            </div>
                        </div>
                        <div className='docCommandContainer'>
                            <a href={ configStorage()+ '/'+ doc.storage_doc} target='_blank' className="docListModif">
                                <div>
                                    consulté le document
                                </div>
                                <GrDocumentPdf size={50}/>
                            </a>
                            <Link to={`/panel/doc/update/${doc.Id_document}`} state={doc}><button  className='modify'>Modifier</button></Link>
                            <button onClick={() => setModal(true)}>Supprimer le document</button>
                            {modal && <Modal handleDelete={()=>handleDelete(doc.Id_document)} onClose={() => setModal(false)} />}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}