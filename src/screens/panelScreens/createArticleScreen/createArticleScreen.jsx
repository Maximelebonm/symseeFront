import { useNavigate } from 'react-router-dom';
import './createArticleScreen.css';
import { useState } from 'react';
import { createArticleApi } from '../../../api/article.backend';
import { FaPlus, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

export const CreateArticleScreen = () => {
    const [articleLines, setArticleLines] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const media = data.get('file');

        let type = '';
        if (['image/png', 'image/jpg', 'image/jpeg'].includes(media?.type)) {
            type = 'image';
        } else if (media?.type === 'application/pdf') {
            type = 'pdf';
        }
        data.append('type', type);

        const submit = async () => {
            setIsSubmitting(true);
            try {
                const response = await createArticleApi(data);
                if (response?.status === 200) {
                    toast.success('Article créé avec succès, retour à la liste.', { autoClose: 2000 });
                    setTimeout(() => navigate('/panel/article/list'), 2000);
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

    const addLineArticle = () => {
        setArticleLines([
            ...articleLines,
            { title: '', subtitle: '', body: '', media: '', positionMedia: 0 }
        ]);
    };

    const removeLineArticle = (index) => {
        setArticleLines(articleLines.filter((_, i) => i !== index));
    };

    const handleChange = (value, field, index) => {
        const newLines = [...articleLines];
        newLines[index] = { ...newLines[index], [field]: value };
        setArticleLines(newLines);
    };

    return (
        <div id='CreateArticleScreenContainer'>
            <ToastContainer />
            <div className='panelScreenHeader'>
                <h1>Créer une actualité</h1>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">

                <fieldset className='CreateArticleScreenItem checkboxItem'>
                    <input type='checkbox' name='visible' id='visible' defaultChecked />
                    <label htmlFor='visible'>Visible sur le site</label>
                </fieldset>

                <fieldset className='formSection'>
                    <legend>Informations générales</legend>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='titleArticle'>Titre de l'article</label>
                        <input type='text' id='titleArticle' name='titleArticle' required />
                    </div>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='subtitleArticle'>Sous-titre de l'article</label>
                        <input type='text' id='subtitleArticle' name='subtitleArticle' />
                    </div>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='descArticle'>Contenu de l'article</label>
                        <textarea id='descArticle' name='descArticle' rows={5} />
                    </div>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='lienArticle'>Lien externe</label>
                        <input type='text' id='lienArticle' name='lienArticle' />
                    </div>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='AuteurArticle'>Auteur de l'article</label>
                        <input type='text' id='AuteurArticle' name='AuteurArticle' />
                    </div>
                </fieldset>

                <fieldset className='formSection'>
                    <legend>Média principal</legend>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='file'>Image d'accueil de l'article</label>
                        <input type='file' id='file' name='file' required />
                    </div>

                    <div className='CreateArticleScreenItem'>
                        <label htmlFor='positionMedia'>Position du média</label>
                        <input type='number' id='positionMedia' name='positionMedia' min={0} max={1} defaultValue={0} required />
                    </div>
                </fieldset>

                <fieldset className='formSection'>
                    <legend>Paragraphes de l'article</legend>

                    <div id='lineArticle'>
                        {articleLines.map((line, index) => (
                            <div key={index} className='lineArticleContainer'>
                                <div className='lineArticleHeader'>
                                    <span>Paragraphe {index + 1}</span>
                                    <button
                                        type='button'
                                        className='removeLineBtn'
                                        onClick={() => removeLineArticle(index)}
                                        aria-label='Supprimer ce paragraphe'
                                    >
                                        <FaTrash />
                                    </button>
                                </div>

                                <div className='CreateArticleScreenItem'>
                                    <label htmlFor={`titleLine-${index}`}>Titre du paragraphe</label>
                                    <input
                                        type='text'
                                        id={`titleLine-${index}`}
                                        name='titleLine'
                                        value={line.title}
                                        onChange={(e) => handleChange(e.target.value, 'title', index)}
                                    />
                                </div>

                                <div className='CreateArticleScreenItem'>
                                    <label htmlFor={`subtitleLine-${index}`}>Sous-titre du paragraphe</label>
                                    <input
                                        type='text'
                                        id={`subtitleLine-${index}`}
                                        name='subtitleLine'
                                        value={line.subtitle}
                                        onChange={(e) => handleChange(e.target.value, 'subtitle', index)}
                                    />
                                </div>

                                <div className='CreateArticleScreenItem'>
                                    <label htmlFor={`bodyLine-${index}`}>Corps du paragraphe</label>
                                    <textarea
                                        id={`bodyLine-${index}`}
                                        name='bodyLine'
                                        rows={4}
                                        value={line.body}
                                        onChange={(e) => handleChange(e.target.value, 'body', index)}
                                    />
                                </div>

                                <div className='CreateArticleScreenItem'>
                                    <label htmlFor={`pictureLine-${index}`}>Image du paragraphe</label>
                                    <input
                                        type='file'
                                        id={`pictureLine-${index}`}
                                        name='pictureLine'
                                        onChange={(e) => handleChange(e.target.files[0], 'media', index)}
                                    />
                                </div>

                                <div className='CreateArticleScreenItem'>
                                    <label htmlFor={`positionLine-${index}`}>Position de l'image</label>
                                    <input
                                        type='number'
                                        id={`positionLine-${index}`}
                                        name='pictutre_position'
                                        min={0}
                                        value={line.positionMedia}
                                        onChange={(e) => handleChange(e.target.value, 'positionMedia', index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button type='button' id='addLinearticle' onClick={addLineArticle}>
                        Ajouter un paragraphe <FaPlus />
                    </button>
                </fieldset>

                <button type='submit' className='submitBtn' disabled={isSubmitting}>
                    {isSubmitting ? 'Envoi en cours...' : "Publier l'article"}
                </button>
            </form>
        </div>
    );
};