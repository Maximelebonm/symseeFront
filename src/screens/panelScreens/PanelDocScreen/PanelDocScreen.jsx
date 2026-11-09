import { Link, useNavigate } from "react-router-dom";
import './panelDocScreen.css';
import { useEffect, useState } from "react";
import { getAllTypeDocuments } from "../../../api/typeDocument.backend";
import { createDocumentApi } from "../../../api/document.backend";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft } from 'lucide-react';

export const PanelDocScreen = () => {
    const [typeDocuments, setTypeDocuments] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            const response = await getAllTypeDocuments();
            if (response) {
                setTypeDocuments(response);
            }
        };
        fetch();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const file = data.get('file');

        if (file.type !== 'application/pdf') {
            toast.error('Fichier non pris en charge, seul le PDF est accepté.', { autoClose: 2000 });
            return;
        }

        const submit = async () => {
            setIsSubmitting(true);
            try {
                const response = await createDocumentApi(data);
                if (response?.status === 200) {
                    toast.success('Document créé avec succès, retour à la liste.', { autoClose: 2000 });
                    setTimeout(() => navigate('/panel/documents/list'), 2000);
                    return;
                }
                if (response?.status === 409) {
                    toast.error('Un fichier du même nom existe déjà.', { autoClose: 3000 });
                } else if (response?.status === 413) {
                    toast.error('Fichier trop volumineux.', { autoClose: 3000 });
                } else if (response?.status === 500) {
                    toast.error('Erreur serveur.', { autoClose: 3000 });
                } else {
                    toast.error('Le serveur ne répond pas.', { autoClose: 3000 });
                }
            } catch (err) {
                toast.error('Une erreur est survenue.', { autoClose: 3000 });
            } finally {
                setIsSubmitting(false);
            }
        };
        submit();
    };

    return (
        <div id='panelDocScreenContainer'>
            <ToastContainer />

            <div className='panelScreenHeader'>
                <h1>Créer un document</h1>
            </div>

            <div id='panelDocFormContainer'>
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <fieldset className='checkboxItem'>
                        <input type='checkbox' name='visible' id='visible' defaultChecked />
                        <label htmlFor='visible'>Visible sur le site</label>
                    </fieldset>

                    <fieldset className='formSection'>
                        <legend>Informations générales</legend>

                        <div className='inputContainer'>
                            <label htmlFor='title'>Titre du document</label>
                            <input type='text' id='title' name='title' required />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='subtitle'>Sous-titre du document</label>
                            <input type='text' id='subtitle' name='subtitle' />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='description'>Description du document</label>
                            <textarea id='description' name='description' rows={4} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='auteur'>Auteur</label>
                            <input type='text' id='auteur' name='auteur' />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='type'>Type de document</label>
                            <select id='type' name='type' defaultValue='none'>
                                <option value='none' disabled>Sélectionner un type</option>
                                {typeDocuments.map((item) => (
                                    <option value={item.Id_typeDocument} key={item.Id_typeDocument}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>

                    <fieldset className='formSection'>
                        <legend>Fichier</legend>
                        <div className='inputContainer'>
                            <label htmlFor='file'>Fichier PDF</label>
                            <input type='file' id='file' name='file' accept='application/pdf' required />
                        </div>
                    </fieldset>

                    <button type='submit' className='submitBtn' disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi en cours...' : 'Publier le document'}
                    </button>
                </form>
            </div>
        </div>
    );
};