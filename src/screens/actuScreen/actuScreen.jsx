import './actuScreen.css';
import { CardArticle } from '../../components/cardArticle/cardArticle';
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { useEffect } from 'react';
import { getAllArticlesApi } from '../../api/article.backend';
import { useState } from 'react';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';

export const ActuScreen = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const response = await getAllArticlesApi();
        if(response.status === 200){
            response.json().then(response => {
                setArticles(response);
            })
        }
    }
        fetchData();
    },[])
   
    return (
        <div id='actuScreenContainer'>
           <TitleH1 title=' Les actualités du Symsee' />
            <section id="actuScreenArticlesContainer">
                {articles.length > 0 && articles.map((article, index) => {
                    return <CardArticle key={index} props={article} />
                })}
            </section>
        </div>
    )
}