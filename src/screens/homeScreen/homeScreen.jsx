
import './homeScreen.css';
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { Link } from 'react-router-dom';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';

import { useState } from 'react';
import { FaHouseFloodWater,FaCloudShowersHeavy } from "react-icons/fa6";
import { Card_Simple_Link } from '../../components/uiElements/card/Card_Simple';
import { GiWaterRecycling,GiWaterSplash } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from 'react';
import { getArticleHomeApi} from '../../api/article.backend';
import { CardArticle } from '../../components/cardArticle/cardArticle';

export const HomeScreen = () => {

        const [isMobile, setIsMobile] = useState(false);
        const [articles, setArticles] = useState([]);
    
        useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
          // Vérifie si l'appareil est mobile
        const mobileCheck = /android|iphone|ipad|ipod|blackberry|windows phone|webos/i.test(userAgent);
        setIsMobile(mobileCheck);

        const fetchData = async () => {
            const response = await getArticleHomeApi();
            if(response.status === 200){
                response.json().then((data) => {
                    setArticles(data);
                })
            }
        }
        fetchData();

        }, []);

    return (
        <div id="homeContainer">
            <div className='vigilence' onClick={()=> window.open("https://vigilance.meteofrance.fr/fr/nord", "_blank")}>
                <FaCloudShowersHeavy className='iconVigi'/>
                <div>
                    VIGIMETEO
                </div>
            </div>
            <div className='vigilence' id='vigiCrue' onClick={()=> window.open("https://www.vigicrues.gouv.fr/", "_blank")}>
                <FaHouseFloodWater className='iconVigi'/>
                <div>
                    VIGICRUES
                </div>
            </div>
            <section id='HomeFirstSection'>             
                    <HomeSlider id='homeSlider'/>
            </section>
            <section id='HomePresentationSection'>
                <p>
                    Le SYMSEE intervient sur 245 km de cours d’eau pour l’amélioration des milieux aquatiques et la prévention des inondations. Son action couvre les rivières de la Selle et ses affluents, l’Écaillon aval et ses affluents, la Naville, la Sensée aval, la Naville Tortue, ainsi que certains affluents directs reliés au canal de l’Escaut.
                </p>
            </section>
            <section className="ContactHomeContainer">
                <TitleH1 title={"APPEL D'URGENCE"} />
                <div className='HomeContactItemContainer'>
                    <div className="contactText">
                        Vous avez une urgence ? Une coulée de boue, un arbre tombé ou une inondation par débordement de la rivière ?
                    </div>
                    <div className="contactText" id="contactUrgence">
                        Veuillez contacter le :<br/>
                        06 40 22 78 32
                    </div>
                    {isMobile &&
                    <a href={`tel:0640227832`}  className="phoneHomeButton "><FaPhoneAlt /> Appeler</a>
                    }
                </div>
            </section>
            <section id="HomeDocumentationSection">
            <TitleH1 title={'DOCUMENTATION'} />
            <div id="cardDocContainer">
                <Card_Simple_Link 
                    title="Comment entretenir les berges d’un cours d’eau ?" 
                    desc="Découvrez les bonnes pratiques dans un guide rédigé par la DDTM59, disponible via le lien suivant :"
                    icon=<GiWaterRecycling />
                    href='https://www.nord.gouv.fr/Actions-de-l-Etat/Environnement/Eau/Guide-pratique-a-l-usage-des-proprietaires-riverains-de-cours-d-eau'
                />
                <Card_Simple_Link 
                    title="Qu’est-ce que l’érosion des sols ? Comment l’éviter ?" 
                    desc='La Chambre d’agriculture des Hauts-de-France a créé un guide pratique qui présente des solutions simples et efficaces pour protéger les sols et préserver les milieux naturels :' 
                    icon=<GiWaterSplash />
                    href='https://hautsdefrance.chambres-agriculture.fr/sinformer/ressources-documentation/toutes-les-publications/publication/guide-de-lerosion-2018'
                />
            </div>
            </section>
           
            <section id="articleSection">
            <Link to='/actualites'>
            <button>Voir tout les Articles</button>
            </Link>
            <div id="homeArticlesContainer">               
                {articles.length > 0 && articles?.map((article, index) => {
                    return (
                        <CardArticle key={index} props={article}/>
                    )
                })}
            </div>
            </section>
            <section id="HomeContactSection">
                <p>
                    Un problème ? Des questions ?
                </p>
                <Link to="/contact">
                    <button>
                        Contactez-nous
                    </button>
                </Link>
            </section>
           
        </div>
    )
}