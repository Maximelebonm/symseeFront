import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PanelAppelDoffreList.css';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { deleteAppelDoffreApi, getAllAppelDoffreApi } from './../../../../api/appelDoffre.backend';
import { MdDelete } from "react-icons/md";
import { ArrowLeft, Search } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from '../../../../components/modal/Modal';

export const PanelAppelDoffreList = () => {
    const [appelDoffre, setAppelDoffre] = useState([]);
    const [selectedADId, setSelectedADId] = useState(null);
    const [modal, setModal] = useState(false);
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try {
                const response = await getAllAppelDoffreApi();
                if (response.status === 200) {
                    const data = await response.json();
                    setAppelDoffre(data);
                } else {
                    toast.error("Impossible de récupérer les appels d'offre.", { autoClose: 2000 });
                }
            } catch (err) {
                toast.error('Erreur réseau.', { autoClose: 2000 });
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, [reload]);

    const handleDelete = async (id) => {
        try {
            const response = await deleteAppelDoffreApi(id);
            if (response.status === 200) {
                toast.success("Appel d'offre supprimé, rechargement des données.", { autoClose: 2000 });
                setModal(false);
                setReload(!reload);
            } else {
                toast.error('Suppression impossible.', { autoClose: 2000 });
            }
        } catch (err) {
            toast.error('Erreur réseau.', { autoClose: 2000 });
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Non renseignée';
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    const isExpired = (dateString) => {
        if (!dateString) return false;
        return new Date(dateString) < new Date();
    };

    const filteredList = appelDoffre.filter((item) =>
        item.title?.toLowerCase().includes(search.toLowerCase()) ||
        item.structure?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id='panelAppelDoffreListContainer'>
            <ToastContainer />
            <div id='panelDoffreList'>
                <div className='panelScreenHeader'>
                    <h1>Liste des appels d'offre</h1>
                </div>
                <div className='panelListToolbar'>
                    <Link to='/panel/appeldoffre/create'>
                        <button type='button' className='createBtn'>+ Nouvel appel d'offre</button>
                    </Link>
                </div>

                <div className='searchBar'>
                    <Search size={18} />
                    <input
                        type='text'
                        placeholder='Rechercher par titre ou structure...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {isLoading && <p className='statusMessage'>Chargement des appels d'offre...</p>}

                {!isLoading && filteredList.length === 0 && (
                    <p className='statusMessage'>Aucun appel d'offre trouvé.</p>
                )}

                <div id='panelDoffreListBody'>
                    {filteredList.map((item) => {
                        const expired = isExpired(item.datelimite);
                        return (
                            <div key={item.Id_appelDoffre} className='panelAppelDoffreListLine'>
                                <div className='doffreContent'>
                                    <div className='doffreHeader'>
                                        <h2>{item.title}</h2>
                                        <span className={`statusBadge ${item.visible ? 'visible' : 'hidden'}`}>
                                            {item.visible ? 'Visible' : 'Masqué'}
                                        </span>
                                        {expired && <span className='statusBadge expired'>Expiré</span>}
                                    </div>
                                    <p className='doffreDescription'>{item.description}</p>
                                    <div className='doffreMeta'>
                                        <span>{item.addresse}</span>
                                        <span>{item.structure}</span>
                                        <span>Date limite : {formatDate(item.datelimite)}</span>
                                    </div>
                                    {item.lien && (
                                        <a href={item.lien} target='_blank' rel='noreferrer'>{item.lien}</a>
                                    )}
                                </div>

                                <div className='panelitemDoffreListCommand'>
                                    <Link to={`/panel/appeldoffre/update/${item.Id_appelDoffre}`} state={item}>
                                        <button type='button' className='modify'><HiOutlinePencilSquare fontSize={22} /></button>
                                    </Link>
                                    <button
                                        type='button'
                                        className='delete'
                                        onClick={() => { setModal(true); setSelectedADId(item.Id_appelDoffre); }}
                                    >
                                        <MdDelete fontSize={22} />
                                    </button>
                                </div>

                                {modal && selectedADId === item.Id_appelDoffre && (
                                    <Modal handleDelete={() => handleDelete(item.Id_appelDoffre)} onClose={() => setModal(false)} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};