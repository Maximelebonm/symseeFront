
import './homeScreen.css';
import imageforet from '../../assets/photo/terrain/foret.png'
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { DefaultButton } from '../../components/uiElements/defaultButton/defaultButton';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <div id="homeContainer">
            <section id='HomeFirstSection'>
                <div id="homeSliderContainer">
                    <HomeSlider id='homeSlider'/>
                </div>
                <div id='homeMeteoContainer'>
                    <h3 className="homeMeteoTitles" id="homeMeteoFirstTitles">VIGILANCE MÉTÉO</h3>
                        <iframe id="homeMeteoiframe" src="https://vigilance.meteofrance.fr/fr/widget-vigilance/vigilance-departement/59" allowfullscreen frameborder="0">
                        </iframe>
                    <p> Source : www.meteofrance.com</p>
                    <h3 className="homeMeteoTitles">DÉBIT DE LA SELLE</h3>
                    <a target='blank' href='https://www.hydro.eaufrance.fr/stationhydro/E172601002/synthese'>
                        <u>
                        cliquez pour la station de Denain
                        </u>

                            
                    </a>
                    <p>Source : www.hydro.eaufrance.fr</p>
                </div>
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
    )
}