
import './homeScreen.css';
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { DefaultButton } from '../../components/uiElements/defaultButton/defaultButton';
import { Link } from 'react-router-dom';
import MemoWave from '../../components/SvgComponent/wave/wave';

export const HomeScreen = () => {
    return (
        <div id="homeContainer">
            <section id='HomeFirstSection'>
                <div id="homeSliderContainer">
                    <HomeSlider id='homeSlider'/>
                </div>
                <MemoWave/>
                <div id='homeMeteoContainer'>
                    <h3 className="homeMeteoTitles" id="homeMeteoFirstTitles">VIGILANCE MÉTÉO</h3>
                        <iframe id="homeMeteoiframe" src="https://vigilance.meteofrance.fr/fr/widget-vigilance/vigilance-departement/59" allowfullscreen>
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
                </div>
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
    )
}