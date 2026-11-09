import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { updateAppelDoffreApi } from '../../../../api/appelDoffre.backend';
import { toast, ToastContainer } from 'react-toastify';
import { ArrowLeft } from 'lucide-react';
import './PanelAppelDoffreUpdate.css';

export const PanelAppelDoffreUpdate = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();

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
            const response = await updateAppelDoffreApi(
                title, description, addresse, datelimite, visible, lien, structure, state.Id_appelDoffre
            );
            if (response.status === 200) {
                toast.success("Appel d'offre mis à jour avec succès, retour à la liste.", { autoClose: 2000 });
                setTimeout(() => navigate('/panel/appelDoffre/list'), 2000);
            } else {
                toast.error('Erreur lors de la mise à jour.', { autoClose: 2000 });
            }
        } catch (err) {
            toast.error('Erreur réseau.', { autoClose: 2000 });
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div id='panelAppelDoffreUpdateContainer'>
            <ToastContainer />

            <div className='panelScreenHeader'>
                <h1>Mettre à jour un appel d&apos;offre</h1>
            </div>

            <div id='panelAppelDoffreFormContainer'>
                <form onSubmit={handleSubmit}>
                    <fieldset className='formSection'>
                        <legend>Informations générales</legend>

                        <div className='inputContainer'>
                            <label htmlFor='title'>Titre</label>
                            <input type='text' id='title' name='title' defaultValue={state.title} required />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='description'>Description</label>
                            <input type='text' id='description' name='description' defaultValue={state.description} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='addresse'>Adresse</label>
                            <input type='text' id='addresse' name='addresse' defaultValue={state.addresse} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='structure'>Structure</label>
                            <input type='text' id='structure' name='structure' defaultValue={state.structure} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='lien'>Lien</label>
                            <input type='text' id='lien' name='lien' defaultValue={state.lien} />
                        </div>

                        <div className='inputContainer'>
                            <label htmlFor='datelimite'>Date limite</label>
                            <input type='date' id='datelimite' name='datelimite' defaultValue={formatDate(state.datelimite)} />
                        </div>

                        <div className='checkboxItem'>
                            <input type='checkbox' id='visible' name='visible' defaultChecked={state.visible} />
                            <label htmlFor='visible'>Visible</label>
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