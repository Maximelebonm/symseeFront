import { Link } from "react-router-dom"
import { createAppelDoffreApi } from "../../../../api/appelDoffre.backend";
import { toast } from "react-toastify";
import './PanelAppelDoffreScreen.css';

export const PanelAppelDoffreScreen = () => {

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

        const response = await createAppelDoffreApi(title, description, addresse, datelimite, visible, lien, structure);
        console.log(response);
        if(response.status === 201){
            toast.success('Appel d\'offre créé avec succès', {autoClose: 2000});
            setTimeout(() => {
                window.location.href('/panel/appeldoffre/list');
            }, 2000);
        }
    }

    return (
        <div id='panelAppelDoffreScreenContainer'>
        <Link className='LinkBack' to='/panel/appelDoffre/list'>
        <button>Retour List</button></Link>
        <h1>Créer un appel d'offre</h1>
                     <form onSubmit={handleSubmit}>
                        <div className='inputContainer'>
                            <label>Titre</label>
                            <input type='text' name='title' />
                        </div>
                        <div className='inputContainer'>
                            <label>Description</label>
                            <input type='text' name='description' />
                        </div>
                        <div className='inputContainer'>
                            <label>Adresse</label>
                            <input type='text' name='addresse' />
                        </div>
                        <div className='inputContainer'>
                            <label>Date limite</label>
                            <input type='date' name='datelimite' />
                        </div>
                        <div className='inputContainer'>
                            <label>visible</label>
                            <input type='checkbox' name='visible' />
                        </div>
                        <div className='inputContainer'>
                            <label>Lien</label>
                            <input type='text' name='lien' />
                        </div>
                        <div className='inputContainer'>
                            <label>Structure</label>
                            <input type='text' name='structure' />
                        </div>
                        <button type='submit'>Créer</button>
                     </form>
            
        </div>
    )
}