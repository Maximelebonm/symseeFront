import { useEffect,useState } from 'react';
import './DocumentsScreen.css';
import { getAllDocuments } from '../../api/document.backend';
import { configStorage } from '../../helpers/config';
import { GrDocumentPdf } from "react-icons/gr";
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';

export const DocumentsScreen = ()=> {
const [documents, setDocuments] = useState([]);

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
    , [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    return (
        <div id="DocScreenConainter">
        <TitleH1 title={'DOCUMENTS'}/>
            {documents.map((doc, index) => {
                const date = formatDate(doc.created_date
                );
                {/* date.getFullYear(); */}
                if(doc.visible || doc.deleted_by === 0){

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
                        <a href={ configStorage()+ '/'+doc.storage_doc} target='_blank' className="docLink">
                            <div>
                                Consulté le document 
                            </div>
                            <GrDocumentPdf size={50}/>
                         </a>
                    </div>
                )
                }
            })}
            
        </div>
    )
}