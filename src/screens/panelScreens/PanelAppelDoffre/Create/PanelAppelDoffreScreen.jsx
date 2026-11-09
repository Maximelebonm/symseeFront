import { Link, useNavigate } from "react-router-dom";
import { createAppelDoffreApi } from "../../../../api/appelDoffre.backend";
import { toast, ToastContainer } from "react-toastify";
import './PanelAppelDoffreScreen.css';
import { useState } from "react";
import { ArrowLeft } from 'lucide-react';

export const PanelAppelDoffreScreen = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const title = data.get('title');
        const description = data.get('description');
        const addresse = data.get('addresse');
        const datelimite = data.get('datelimite');
        const visible = data.get('visible');
        const lien = data.get('lien');
        const structure = data.get('structure');

        setIsSubmitting(true);
        try {
            const response = await createAppelDoffreApi(title, description, addresse, datelimite, visible, lien, structure);

            if (response?.status === 201) {
                toast.success("Appel d'offre créé avec succès, retour à la liste.", { autoClose: 2000 });
                setTimeout(() => navigate('/panel/appeldoffre/list'), 2000);
                return;
            }
            if (response?.status === 409) {
                toast.error("Un appel d'offre similaire existe déjà.", { autoClose: 3000 });
            } else if (response?.status === 500) {
                toast.error('Erreur serveur.', { autoClose: 3000 });
            } else {
                toast.error('Le serveur ne répond pas.', { autoClose: 3000 });
            }
            setIsSubmitting(false);
        } catch (err) {
            toast.error('Une erreur est survenue.', { autoClose: 3000 });
            setIsSubmitting(false);
        }
    };

    return (
        <div id='panelAppelDoffreScreenContainer'>
            <ToastContainer />

            <div className='panelScreenHeader'>
                <h1>Créer un appel d'offre</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Informations générales</legend>

                    <div className='inputContainer'>
                        <label htmlFor='title'>Titre</label>
                        <input id='title' type='text' name='title' required />
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='description'>Description</label>
                        <textarea id='description' name='description' rows={5} required />
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='structure'>Structure</label>
                        <input id='structure' type='text' name='structure' required />
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='addresse'>Adresse</label>
                        <input id='addresse' type='text' name='addresse' />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Détails de la publication</legend>

                    <div className='inputContainer'>
                        <label htmlFor='datelimite'>Date limite</label>
                        <input id='datelimite' type='date' name='datelimite' required />
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='lien'>Lien</label>
                        <input id='lien' type='url' name='lien' placeholder='https://...' />
                    </div>

                    <div className='inputContainer checkboxContainer'>
                        <input id='visible' type='checkbox' name='visible' defaultChecked/>
                        <label htmlFor='visible'>Visible immédiatement</label>
                    </div>
                </fieldset>

                <button type='submit' className='submitBtn' disabled={isSubmitting}>
                    {isSubmitting ? 'Création en cours...' : "Créer l'appel d'offre"}
                </button>
            </form>
        </div>
    );
};