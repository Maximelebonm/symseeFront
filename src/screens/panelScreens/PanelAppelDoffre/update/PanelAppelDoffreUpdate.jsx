import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { updateAppelDoffreApi } from '../../../../api/appelDoffre.backend';
import { toast, ToastContainer } from 'react-toastify';
import './PanelAppelDoffreUpdate.css';
import { useNavigate } from 'react-router-dom';

export const PanelAppelDoffreUpdate = () => {
      const [load, setLoad] = useState(false);
        const location = useLocation();
        const state = location.state;
        const naviguate = useNavigate();

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
        console.log(title, description, addresse, datelimite, visible, lien, structure);

        const response = await updateAppelDoffreApi(title, description, addresse, datelimite, visible, lien, structure, state.Id_appelDoffre);
        console.log(response);
        if(response.status === 200){
            toast.success("Appel d'offre mis à jour avec succès retour à la liste", {autoClose: 2000});
            setTimeout(() => {
                naviguate('/panel/appelDoffre/list');
            }, 3000);
        }
        else{
            toast.error('Erreur lors de la mise a jour', {autoClose: 2000});
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <>
            <ToastContainer/>
            <Link className='LinkBack' to='/panel/appelDoffre/list'>
                <button>Retour List</button>
            </Link>
            <h1>mettre a jour un appel d'offre</h1>
        <div id='panelAppelDoffreUpdateContainer'>
            <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <label>Titre</label>
                    <input type='text' name='title' defaultValue={state.title}/>
                </div>
                <div className='inputContainer'>
                    <label>Description</label>
                    <input type='text' name='description' defaultValue={state.description}/>
                </div>
                <div className='inputContainer'>
                    <label>Adresse</label>
                    <input type='text' name='addresse' defaultValue={state.addresse}/>
                </div>
                <div className='inputContainer'>
                    <label>Date limite</label>
                    <input type='date' name='datelimite' defaultValue={formatDate(state.datelimite)}/>
                </div>
                <div className='inputContainer'>
                    <label>visible</label>
                    <input type='checkbox' name='visible' defaultChecked={state.visible}/>
                </div>
                <div className='inputContainer'>
                    <label>Lien</label>
                    <input type='text' name='lien' defaultValue={state.lien}/>
                </div>
                <div className='inputContainer'>
                    <label>Structure</label>
                    <input type='text' name='structure' defaultValue={state.structure}/>
                </div>
                <button type='submit'>Valider</button>
            </form>
        </div>
        </>
    )
}
        
