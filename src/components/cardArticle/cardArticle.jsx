import './cardArticle.css';
import imageforet from '../../assets/photo/terrain/foret.jpg';
import { Link } from 'react-router-dom';
import { configStorage } from '../../helpers/config';

export const CardArticle = ({ props }) => {
    const { title, subtitle, articleMedia, Id_article } = props;

    const media = articleMedia?.[0];
    const imageSrc = media?.type === 'image'
        ? `${configStorage()}/${media.storage}`
        : imageforet;

    return (
        <Link
            to={`/article/${Id_article}`}
            state={props}
            className="cardArticleContainer"
            aria-label={`Lire l'article : ${title}`}
        >
            <article className="cardArticlePos">
                <section className="cardArticleHead">
                    <img
                        src={imageSrc}
                        alt={media?.type === 'image' ? title : ''}
                        loading="lazy"
                    />
                    <div>
                        <h2>{title}</h2>
                        {subtitle && <p className="cardArticleSubtitle">{subtitle}</p>}
                        <span className="cardArticleCta">
                            Cliquez pour lire l'article
                        </span>
                    </div>
                </section>
            </article>
        </Link>
    );
};