import { useLocation, Link } from 'react-router-dom';
import './articleScreen.css';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';
import { configStorage } from '../../helpers/config';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowLeft as ArrowLeftIcon } from 'lucide-react';

export const ArticleScreen = () => {
    const location = useLocation();
    const state = location.state;

    if (!state) {
        return (
            <div id="articleScreenContainer">
                <p>Aucun article à afficher.</p>
                <Link to="/" className="backLink">
                    <ArrowLeftIcon size={18} /> Retour
                </Link>
            </div>
        );
    }

    const mainMedia = state.articleMedia?.[0];
    const imageBefore = mainMedia?.type === 'image' && mainMedia.position === 0;
    const imageAfter = mainMedia?.type === 'image' && mainMedia.position === 1;

    const formattedDescription = state.description
        ?.replace(/\r\n/g, "\n")
        .replace(/\n/g, "<br/>");

    return (
        <div id="articleScreenContainer">
            <Link to="/" className="backLink">
                <ArrowLeftIcon size={18} /> Retour
            </Link>

            <div id="articleTitleContainer">
                <TitleH1 title={state.title} />
            </div>

            <div id="articleTextContainer">
                {imageBefore && (
                    <img
                        src={`${configStorage()}/${mainMedia.storage}`}
                        alt={state.title || 'image'}
                        loading="lazy"
                    />
                )}

                {state.subtitle && <h2>{state.subtitle}</h2>}

                <div
                    className="articleDescription"
                    dangerouslySetInnerHTML={{ __html: formattedDescription }}
                />

                {imageAfter && (
                    <img
                        src={`${configStorage()}/${mainMedia.storage}`}
                        alt={state.title || 'image'}
                        loading="lazy"
                    />
                )}
            </div>

            {state.lien && (
                <div id="articleLienContainer">
                    <p>Pour en savoir plus :</p>
                    <a href={state.lien} target="_blank" rel="noopener noreferrer">
                        Voir la source <FaExternalLinkAlt />
                    </a>
                </div>
            )}
        </div>
    );
};