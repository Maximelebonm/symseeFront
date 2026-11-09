import { Link, useLocation, useNavigate } from "react-router-dom"
import { updateDocumentApi } from "../../../api/document.backend";
import { useEffect, useState } from "react";
import { getAllTypeDocuments } from "../../../api/typeDocument.backend";
import { configStorage } from "../../../helpers/config";
import { GrDocumentPdf } from "react-icons/gr";
import { ArrowLeft } from 'lucide-react';
import { toast, ToastContainer } from "react-toastify";

export const PanelUpdateDocs = () => {
    const [typeDocuments, setTypeDocuments] = useState([]);
    const [load, setLoad] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state;

    useEffect(() => {
        const fetch = async () => {
            const response = await getAllTypeDocuments();
            if (response) {
                setTypeDocuments(response);
                setLoad(true);
            }
        };
        fetch();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const file = data.get('file');

        if (file && file.name !== '' && file.type !== 'application/pdf') {
            toast.error('Fichier non pris en charge, seul le PDF est accepté.', { autoClose: 2000 });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await updateDocumentApi(data, state.Id_document);
            if (response.status === 200) {
                toast.success('Document mis à jour, retour à la liste.', { autoClose: 2000 });
                setTimeout(() => navigate('/panel/documents/list'), 2000);
                return;
            }
            if (response.status === 409) {
                toast.error('Un document du même nom existe déjà.', { autoClose: 2000 });
            } else {
                toast.error(response.message || 'Une erreur est survenue.', { autoClose: 2000 });
            }
        } catch (err) {
            toast.error('Erreur réseau.', { autoClose: 2000 });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='panelDocScreenContainer'>
            <ToastContainer />

            <div className='panelScreenHeader'>
                <h1>Mettre à jour un document</h1>
            </div>

            <div id='panelDocFormContainer'>
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <fieldset className='checkboxItem'>
                        <input type='checkbox' name='visible' id='visible' defaultChecked={state.visible} />
                        <label htmlFor='visible'>Visible sur le site</label>
                    </fieldset>

                    <fieldset className='formSection'>
                        <legend>Informations générales</legend>

                        <div className='inputContainer'>
                            <label htmlFor='title'>Titre du document</label>
                            <input type='text' id='title' name='title' defaultValue={state.title} required />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='subtitle'>Sous-titre du document</label>
                            <input type='text' id='subtitle' name='subtitle' defaultValue={state.subtitle} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='description'>Description du document</label>
                            <textarea id='description' name='description' rows={4} defaultValue={state.description} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='auteur'>Auteur</label>
                            <input type='text' id='auteur' name='auteur' defaultValue={state.auteur} />
                        </div>

                        {load && (
                            <div className='inputContainer'>
                                <label htmlFor='type'>Type de document</label>
                                <select id='type' name='type' defaultValue={state.typeDocument.Id_typeDocument}>
                                    {typeDocuments?.map((item) => (
                                        <option value={item.Id_typeDocument} key={item.Id_typeDocument}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </fieldset>

                    <fieldset className='formSection'>
                        <legend>Fichier</legend>

                        <div className='inputContainer'>
                            <a href={configStorage() + '/' + state.storage_doc} target='_blank' rel='noreferrer' className="docLink">
                                <div>Consulter le document actuel</div>
                                <GrDocumentPdf size={50} />
                            </a>
                            <input hidden name='lastfile' defaultValue={state.storage_doc} readOnly />
                            <label htmlFor='file'>
                                Nouveau fichier <span className='warningText'>(remplacera l'ancienne version)</span>
                            </label>
                            <input type='file' id='file' name='file' accept='application/pdf' />
                        </div>
                    </fieldset>

                    <button type='submit' className='submitBtn' disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi en cours...' : 'Valider les modifications'}
                    </button>
                </form>
            </div>
        </div>
    );
};