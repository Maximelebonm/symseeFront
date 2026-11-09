import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { updateArticleApi } from '../../../api/article.backend';
import { ToastContainer, toast } from 'react-toastify';
import { configStorage } from '../../../helpers/config';
import { GrDocumentPdf } from 'react-icons/gr';
import { ArrowLeft } from 'lucide-react';
import './updateArticleScreen.css';

export const UpdateArticleScreen = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const media = data.get('file');
        let type = '';

        if (media && media.size > 0) {
            if (['image/png', 'image/jpg', 'image/jpeg'].includes(media.type)) {
                type = 'image';
            } else if (media.type === 'application/pdf') {
                type = 'pdf';
            } else {
                toast.error('Format de fichier non pris en charge.', { autoClose: 2000 });
                return;
            }
        }

        data.append('type', type);

        setIsSubmitting(true);
        try {
            const response = await updateArticleApi(data, state.Id_article);
            if (response.status === 200) {
                toast.success('Article mis à jour, retour à la liste.', { autoClose: 2000 });
                setTimeout(() => navigate('/panel/article/list'), 2000);
            } else if (response.status === 401) {
                toast.error('Fichier trop volumineux.', { autoClose: 2000 });
            } else {
                toast.error('Erreur lors de la mise à jour.', { autoClose: 2000 });
            }
        } catch (err) {
            toast.error('Erreur réseau.', { autoClose: 2000 });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='CreateArticleScreenContainer'>
            <ToastContainer />

            <div className='panelScreenHeader'>
                <h1>Mettre à jour un article</h1>
            </div>

            <div id='panelArticleFormContainer'>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <fieldset className='formSection'>
                        <legend>Informations générales</legend>

                        <div className='checkboxItem'>
                            <input type='checkbox' id='visible' name='visible' defaultChecked={state.visible} />
                            <label htmlFor='visible'>Visibilité de l'article</label>
                        </div>

                        <div className='CreateArticleScreenItem'>
                            <label htmlFor='titleArticle'>Titre de l'article</label>
                            <input type='text' id='titleArticle' name='titleArticle' defaultValue={state.title} required />
                        </div>

                        <div className='CreateArticleScreenItem'>
                            <label htmlFor='subtitleArticle'>Sous-titre de l'article</label>
                            <input type='text' id='subtitleArticle' name='subtitleArticle' defaultValue={state.subtitle} />
                        </div>

                        <div className='CreateArticleScreenItem'>
                            <label htmlFor='descArticle'>Contenu de l'article</label>
                            <textarea id='descArticle' name='descArticle' defaultValue={state.description}></textarea>
                        </div>

                        <div className='CreateArticleScreenItem'>
                            <label htmlFor='lienArticle'>Lien</label>
                            <input type='text' id='lienArticle' name='lienArticle' defaultValue={state.lien} />
                        </div>

                        <div className='CreateArticleScreenItem'>
                            <label htmlFor='AuteurArticle'>Auteur de l'article</label>
                            <input type='text' id='AuteurArticle' name='AuteurArticle' defaultValue={state.auteur} />
                        </div>
                    </fieldset>

                    <fieldset className='formSection'>
                        <legend>Média</legend>

                        <div className='CreateArticleScreenItem'>
                            {state.articleMedia[0]?.type === 'pdf' && (
                                <div className='panelArticleMedia'>
                                    <a href={configStorage() + '/' + state.articleMedia[0].storage} target='_blank' rel='noreferrer'>
                                        <div>Consulter le document actuel</div>
                                        <GrDocumentPdf size={50} />
                                    </a>
                                </div>
                            )}

                            {state.articleMedia[0]?.type === 'image' && (
                                <div className='panelArticleMedia'>
                                    <img src={configStorage() + '/' + state.articleMedia[0].storage} alt={state.title} />
                                </div>
                            )}

                            <label htmlFor='file'>
                                Nouveau média <span className='warningText'>(remplacera l'ancienne version)</span>
                            </label>
                            <input type='file' id='file' name='file' />
                            <input hidden name='lastfile' defaultValue={state.articleMedia[0].storage} readOnly />
                        </div>

                        <div className='CreateArticleScreenItem'>
                            <label htmlFor='positionMedia'>Position média</label>
                            <input type='number' id='positionMedia' name='positionMedia' min={0} max={1} defaultValue={0} required />
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