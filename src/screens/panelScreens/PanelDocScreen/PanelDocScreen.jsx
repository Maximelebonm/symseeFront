import { Link } from "react-router-dom";
import './panelDocScreen.css';
import { useEffect, useState } from "react";
import { getAllTypeDocuments } from "../../../api/typeDocument.backend";
import { createDocumentApi } from "../../../api/document.backend";

export const PanelDocScreen = () => {
    const [typeDocuments, setTypeDocuments] = useState([]);
    useEffect(() => {
        const fetch = async() => {
            const response = await getAllTypeDocuments() ;
            console.log(response);
            if(response){
                setTypeDocuments(response);
            }
        }
        fetch();
    }, [])

    console.log(typeDocuments);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const title = data.get('title');
        const subtitle = data.get('subtitle');
        const description = data.get('description');
        const visible = data.get('visible');
        const auteur = data.get('auteur');

        const type = data.get('type');
        const file = data.get('file');
        console.log(title, subtitle, description, visible, auteur, type, file);

        if(file.type !== 'application/pdf'){
            alert('fichier non pris en charge');
            return;
        }
        const fetch = async() => {
            const response = await createDocumentApi(data);
            console.log(response);
            if(response.status === 200){
                alert('document crée');
            }
        }
        fetch();
    }

    return (
        <div id='panelDocScreenContainer'>
                        <Link className='LinkBack' to='/panel'>
                        <button>Retour Home</button></Link>
                <h1>creer un document</h1>
                <div id='panelDocFormContainer'>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='inputContainer'>
                    <label>Titre du document</label>
                    <input type='text' name='title'></input>
                </div>
                <div className='inputContainer'>
                    <label>Sous titre du document</label>
                    <input type='text' name='subtitle'></input>
                </div>
                <div className='inputContainer'>
                    <label>Description du document</label>
                    <input type='text' name='description'></input>
                </div>
                <div className='inputContainer'>
                    <label>Visible</label>
                    <input type='checkbox' name='visible'></input>
                </div>
                <div className='inputContainer'>
                    <label>Auteur</label>
                    <input type="text" name="auteur"></input>
                </div>
                <div className='inputContainer'>
                <label>type de document</label>
                    <select name='type' defaultValue={"none"}>
                        {typeDocuments.map((item, index) => {
                            return (
                                <option value={item.Id_typeDocument} key={index}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <input type='file' name='file'></input>
                <button type='submit'>submit</button>
                </form>
                </div>
        </div>
    )
}