
import './homeScreen.css';
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { DefaultButton } from '../../components/uiElements/defaultButton/defaultButton';
import { Link } from 'react-router-dom';
import MemoWave from '../../components/SvgComponent/wave/wave';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';
import { BassinVersant } from '../../components/SvgComponent/cartes/bassinVersant/bassinVersant';
import { Interco } from '../../components/SvgComponent/cartes/interco/interco';
import { useState } from 'react';import { FaHouseFloodWater } from "react-icons/fa6";
import { CardArticle } from '../../components/cardArticle/cardArticle';

export const HomeScreen = () => {
    const [map, setMap] = useState();
    // document.getElementById("vigiCrue").addEventListener("mouseover", function(){
    //     document.getElementById("vigiCrue").innerHTML = "VIGICRUE";
    //   });
    //   document.getElementById("vigiCrue").addEventListener("mouseout", function(){
    //     document.getElementById("vigiCrue").innerHTML = <FaHouseFloodWater />;
    //   });

    return (
        <div id="homeContainer">
            <div id='vigiMet' onClick={()=> window.open("https://vigilance.meteofrance.fr/fr/nord", "_blank")}>
                <FaHouseFloodWater />
                VIGI METEO
            </div>
            <div id='vigiCrue' onClick={()=> window.open("https://www.vigicrues.gouv.fr/", "_blank")}>
                <div>
                <FaHouseFloodWater />
                </div>
                <div>
                    VIGI CRUE
                </div>
            </div>
            <section id='HomeFirstSection'>
                <div id="homeSliderContainer">
                    <HomeSlider id='homeSlider'/>
                </div>
                <MemoWave/>
            </section>
            <div className="homeSecondContainer">
                <div Id="IntroSection">
                <div id='homeMap'>
                        {map ?  <BassinVersant className='map'/> : <Interco className='map'/> }
                        <button id={'button'} onClick={()=>setMap(!map)}>{map ? 'voir Intercomunalité' : 'voir bassin versant'} </button>
                    </div>
                    <div>
                        <TitleH1 title={'INTRODUCTION'} />
                        <p className='homeParagraphe'>
                                Le Syndicat Mixte du Sud Est de l’Escaut, précédemment connu sous le nom de Syndicat Mixte du Bassin de la Selle, gère la compétence GEMAPI pour six établissements publics de coopération intercommunale (EPCI). 
                            </p>
                            <p className='homeParagraphe'>
                                
                            </p>
                    </div>
                </div>
               
                {/* <div id='homeMeteoContainer'>
                     <h3 className="homeMeteoTitles" id="homeMeteoFirstTitles">VIGILANCE MÉTÉO</h3>
                     
                     <iframe src="https://vigilance.meteofrance.fr/fr/widget-vigilance/vigilance-departement/59"  width="302" height="122" frameborder="0">
				</iframe>
                    <p> Source : www.meteofrance.com</p>
                        <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=1607953&language=fr&region=FR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" width="290" height="318"></iframe>
                        <p> Source : www.meteoetradar.com</p>
                    <h3 className="homeMeteoTitles">DÉBIT DE LA SELLE</h3>
                    <a target='blank' href='https://www.hydro.eaufrance.fr/stationhydro/E172601002/synthese'>
                        <u>
                            cliquez pour la station de Denain
                        </u>
                    </a>
                    <p>Source : www.hydro.eaufrance.fr</p>
                </div> */}
            <section>

            </section>
            <section>
                <div>Le mot du président ?</div>
            </section>
            <section id="HomeContactSection">
                <p>
                    un problème ? Des question ?
                </p>
                <Link to="/contact">
                    <DefaultButton text="Contacter Nous" id='HomeContactSectionButton'/>
                </Link>
            </section>
            </div>
            <div className=''>
            <iframe width="100%" height="300px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/fr/map/new/?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/new/?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true">Voir en plein écran</a></p>

            </div>
        </div>
    )
}