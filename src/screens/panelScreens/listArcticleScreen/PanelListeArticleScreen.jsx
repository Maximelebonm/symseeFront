import { Link } from 'react-router-dom'
import './listeArticleScreen.css'

import { useEffect, useState } from 'react';
import { getAllArticlesApi } from '../../../api/article.backend';
import { CardArticle } from '../../../components/cardArticle/cardArticle';

export const PanelListeArticleScreen = () => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        const fetch = async() => {
            const response = await getAllArticlesApi();
            console.log(response);
            setArticle(response);
        }
        fetch();
    }, [])

    return (
        <div id='PanelListArticleScreenContainer'>
                        <Link className='LinkBack' to='/panel'>
                        <button>Retour Home</button></Link>
        {article?.map((item, index) => {
            return (
                <Link to={`/admin/article/${item.Id_article}`} key={index} className='PanelListArticleScreenitem'>
                <CardArticle title={item.title} id={item.Id_article}/>
                </Link>
            )
        })
        }
        </div>
    );
}