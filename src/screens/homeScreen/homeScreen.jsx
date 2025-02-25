
import './homeScreen.css';
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { Link } from 'react-router-dom';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';
import bassin_verssant from  '../../assets/cartes/Bassin_versant.png';
import interco from '../../assets/cartes/Interco_rework.png';
import { useState } from 'react';
import { FaHouseFloodWater,FaCloudShowersHeavy } from "react-icons/fa6";
import { Card_Simple_Link } from '../../components/uiElements/card/Card_Simple';
import { GiWaterRecycling,GiWaterSplash } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from 'react';

export const HomeScreen = () => {
    const [map, setMap] = useState(true);
        const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
          const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
          // Vérifie si l'appareil est mobile
          const mobileCheck = /android|iphone|ipad|ipod|blackberry|windows phone|webos/i.test(userAgent);
          setIsMobile(mobileCheck);
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
                <div id="homeSliderContainer">
                    <HomeSlider id='homeSlider'/>
                </div>
            </section>
            <section className="ContactHomeContainer">
            <TitleH1 title={"APPEL D'URGENCE"} />
            <div className='HomeContactItemContainer'>
                <div className="contactText">
                    Vous avez une urgence ? Coulées de boue, arbre tombé ou une inondation par débordement de la rivière.
                </div>
                <div className="contactText" id="contactUrgence">
                    Veuillez contacter le :<br/>
                    06 40 22 78 32
                </div>
                {
                   isMobile &&
                <a href={`tel:0640227832`}  className="phoneHomeButton "><FaPhoneAlt /> Appeler</a>
                }
            </div>
            </section>
            <section id="HomeDocumentationSection">
            <TitleH1 title={'DOCUMENTATION'} />
            <div id="cardDocContainer">
                <Card_Simple_Link 
                    title="Guide entretien rivière" 
                    desc=""
                    icon=<GiWaterRecycling />
                    path='/documents'
                />
                <Card_Simple_Link 
                    title="Guide de lutte contre l'érosion des sols" 
                    desc='' 
                    icon=<GiWaterSplash />
                    path='/documents'
                />
            </div>
            </section>
            <section id="homeCarteSection">        
                <div id='homeMap'>
                        {map ?  <img src={bassin_verssant} className='map'/> : <img src={interco} className='map'/> }
                        <button onClick={()=>setMap(!map)}>{map ? 'voir Intercomunalité' : 'voir bassin versant'} </button>
                </div>
                <div id='homeIntroText'>
                    <TitleH1 title={'INTRODUCTION'} />
                    <p className='homeParagraphe'>
                        Le Syndicat Mixte du Sud Est de l’Escaut, précédemment connu sous le nom de Syndicat Mixte du Bassin de la Selle, gère la compétence GEMAPI pour six établissements publics de coopération intercommunale (EPCI). 
                    </p>
                    <p className='homeParagraphe'>
                        Son objectif est de gérer 245 km de cours d&apos;eau, affluents du Fleuve Escaut, répartis sur un territoire de 40 000 hectares englobant 72 communes. 
                    </p>
                    <p className='homeParagraphe'>
                        Les six EPCI concernés sont : la Communauté d’Agglomération de la Porte du Hainaut, la Communauté d’Agglomération Valenciennes Métropole, la Communauté d’Agglomération Caudrésis-Catésis, la Communauté de Communes du Pays Solesmois, La communauté de Communes Thiérache Sambre et Oise, et la Communauté de Communes du Pays de Mormal. 
                    </p>
                    <p className='homeParagraphe'>
                        Parmi les cours d&apos;eau gérés figurent La Selle, Le Béart, la rivière des Essarts, le ruisseau du Cambrésis, le Rogneau, L’Ecaillon aval, Le Vieil Escaut, La Naville, La Naville Tortue, la Sensée aval, et la rivière du Moulin…
                    </p>
                </div>             
            </section>
            <section>

            </section>
            <section id="HomeContactSection">
                <p>
                    un problème ? Des question ?
                </p>
                <Link to="/contact">
                    <button>
                        Contacter nous
                    </button>
                </Link>
            </section>
           
        </div>
    )
}