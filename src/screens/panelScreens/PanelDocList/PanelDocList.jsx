import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GrDocumentPdf } from "react-icons/gr";
import { getAllDocuments, deleteDocumentApi } from '../../../api/document.backend';
import { configStorage } from '../../../helpers/config';
import { Modal } from '../../../components/modal/Modal';
import { ToastContainer, toast } from "react-toastify";
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { MdDelete } from "react-icons/md";
import { ArrowLeft, Search } from 'lucide-react';
import './panelDocList.css';
import '../PanelAppelDoffre/List/PanelAppelDoffreList.css';

export const PanelDocList = () => {
    const [documents, setDocuments] = useState([]);
    const [selectedDocId, setSelectedDocId] = useState(null);
    const [modal, setModal] = useState(false);
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try {
                const response = await getAllDocuments();
                if (response) {
                    setDocuments(response.data);
                } else {
                    toast.error('Impossible de récupérer les documents.', { autoClose: 2000 });
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
            const response = await deleteDocumentApi(id);
            if (response.status === 200) {
                toast.success('Document supprimé.', { autoClose: 2000 });
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
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    const filteredDocuments = documents.filter((doc) =>
        doc.title?.toLowerCase().includes(search.toLowerCase()) ||
        doc.auteur?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id="PanelDocScreenConainter">
            <ToastContainer />

            <div className='panelScreenHeader'>
                <h1>Gestion des documents</h1>
            </div>

            <div className='panelListToolbar'>
                <Link to='/panel/documents/create'>
                    <button className='createBtn' type='button'>+ Nouveau document</button>
                </Link>
            </div>

            <div className='searchBar'>
                <Search size={18}/>
                <input
                    type='text'
                    placeholder='Rechercher par titre ou auteur...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {isLoading && (
                <div className='panelListState'>Chargement des documents...</div>
            )}

            {!isLoading && filteredDocuments.length === 0 && (
                <div className='panelListState'>
                    {search ? 'Aucun document ne correspond à votre recherche.' : 'Aucun document pour le moment.'}
                </div>
            )}

            <div className='panelDoffreList'>
                {!isLoading && filteredDocuments.map((doc) => (
                    <div key={doc.Id_document} className='panelAppelDoffreListLine docContainer'>
                        <div className='docText'>
                            <p className='docDate'>{formatDate(doc.created_date)}</p>
                            <div className='articleTitle'>{doc.title}</div>
                            {doc.subtitle && <div className='articleSubtitle'>{doc.subtitle}</div>}
                            <div className='articleDescription'>{doc.description}</div>
                            {doc.auteur && <div className='articleAuteur'>Par {doc.auteur}</div>}
                            <div className='docType'>
                                <span>Type :</span> {doc.typeDocument?.name}
                            </div>
                            <span className={`statusBadge ${doc.visible ? 'visible' : 'hidden'}`}>
                                {doc.visible ? 'Visible' : 'Masqué'}
                            </span>
                        </div>

                        <div className='docCommandContainer'>
                            <a href={configStorage() + '/' + doc.storage_doc} target='_blank' rel='noreferrer' className="docListModif">
                                <div>Consulter le document</div>
                                <GrDocumentPdf size={50} />
                            </a>

                            <div className='panelitemDoffreListCommand'>
                                <Link to={`/panel/doc/update/${doc.Id_document}`} state={doc}>
                                    <button className='modify' type='button' aria-label='Modifier'>
                                        <HiOutlinePencilSquare fontSize={24} />
                                    </button>
                                </Link>
                                <button
                                    className='delete'
                                    type='button'
                                    aria-label='Supprimer'
                                    onClick={() => { setModal(true); setSelectedDocId(doc.Id_document); }}
                                >
                                    <MdDelete fontSize={24} />
                                </button>
                            </div>
                        </div>

                        {modal && selectedDocId === doc.Id_document && (
                            <Modal handleDelete={() => handleDelete(doc.Id_document)} onClose={() => setModal(false)} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};