import { Link, useNavigate } from 'react-router-dom'
import './listeArticleScreen.css'
import { useEffect, useState } from 'react';
import { deleteArticleApi, getAllArticlesApi } from '../../../api/article.backend';
import { configStorage } from '../../../helpers/config';
import { MdDelete } from 'react-icons/md';
import { Modal } from '../../../components/modal/Modal';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { GrDocumentPdf } from 'react-icons/gr';
import { ArrowLeft, Search } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import '../PanelAppelDoffre/List/PanelAppelDoffreList.css';

export const PanelListeArticleScreen = () => {
    const [article, setArticle] = useState([]);
    const [selectedArticleId, setSelectedArticleId] = useState(null);
    const [modal, setModal] = useState(false);
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try {
                const response = await getAllArticlesApi();
                if (response.status === 200) {
                    const data = await response.json();
                    setArticle(data);
                } else {
                    toast.error('Impossible de récupérer les articles.', { autoClose: 2000 });
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
            const response = await deleteArticleApi(id);
            if (response.status === 200) {
                toast.success('Article supprimé.', { autoClose: 2000 });
                setModal(false);
                setReload(!reload);
            } else {
                toast.error('Suppression impossible.', { autoClose: 2000 });
            }
        } catch (err) {
            toast.error('Erreur réseau.', { autoClose: 2000 });
        }
    };

    const filteredArticles = article.filter((item) =>
        item.title?.toLowerCase().includes(search.toLowerCase()) ||
        item.auteur?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id='PanelListArticleScreenContainer'>
            <ToastContainer />
            <div id='panelDoffreList'>

         
            <div className='panelScreenHeader'>
                <h1>Gestion des actualités</h1>
            </div>

            <div className='panelListToolbar'>
                <Link to='/panel/article/create'>
                    <button className='createBtn' type='button'>+ Nouvelle actualité</button>
                </Link>
            </div>
            <div className='searchBar'>
                <Search size={18} />
                <input
                    type='text'
                    placeholder='Rechercher par titre ou auteur...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {isLoading && (
                <div className='panelListState'>Chargement des articles...</div>
            )}

            {!isLoading && filteredArticles.length === 0 && (
                <div className='panelListState'>
                    {search ? 'Aucun article ne correspond à votre recherche.' : 'Aucun article pour le moment.'}
                </div>
            )}

            <div className='panelArticleListContainer'>
                {!isLoading && filteredArticles.map((item) => (
                    <div key={item.Id_article} className='PanelListArticleScreenitem'>
                        <div className='panelArticleText'>
                            <div className='articleTitle'>{item.title}</div>
                            {item.subtitle && <div className='articleSubtitle'>{item.subtitle}</div>}
                            <div
                                className='articleDescription'
                                dangerouslySetInnerHTML={{
                                    __html: item.description?.replace(/\r\n/g, "\n").replace(/\n/g, "<br/>")
                                }}
                            />
                            {item.auteur && <div className='articleAuteur'>Par {item.auteur}</div>}
                            <span className={`visibilityBadge ${item.visible ? 'visible' : 'hidden'}`}>
                                {item.visible ? 'Visible' : 'Masqué'}
                            </span>
                        </div>

                        <div className='panelArticleActions'>
                            {item.articleMedia?.[0]?.type === 'pdf' && (
                                <div className='panelArticleMedia'>
                                    <a href={configStorage() + '/' + item.articleMedia[0].storage} target='_blank' rel='noreferrer'>
                                        <div>Consulter le document</div>
                                        <GrDocumentPdf size={50} />
                                    </a>
                                </div>
                            )}

                            {item.articleMedia?.[0]?.type === 'image' && (
                                <div className='panelArticleMedia'>
                                    <img src={configStorage() + '/' + item.articleMedia[0].storage} alt={item.title} />
                                </div>
                            )}

                            <div className='actionButtons'>
                                <Link to={`/panel/article/update/${item.Id_article}`} state={item}>
                                    <button className='modify' type='button' aria-label='Modifier'>
                                        <HiOutlinePencilSquare fontSize={24} />
                                    </button>
                                </Link>
                                <button
                                    className='delete'
                                    type='button'
                                    aria-label='Supprimer'
                                    onClick={() => { setModal(true); setSelectedArticleId(item.Id_article); }}
                                >
                                    <MdDelete fontSize={24} />
                                </button>
                            </div>
                        </div>

                        {modal && selectedArticleId === item.Id_article && (
                            <Modal handleDelete={() => handleDelete(item.Id_article)} onClose={() => setModal(false)} />
                        )}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};