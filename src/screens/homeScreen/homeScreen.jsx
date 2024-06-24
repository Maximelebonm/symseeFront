
import './homeScreen.css';
import imageforet from '../../assets/photo/terrain/foret.png'
import { HomeSlider } from '../../components/homeSlider/homeSlider';
import { DefaultButton } from '../../components/uiElements/defaultButton/defaultButton';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <div id="homeContainer">
            <section id='HomeImageSection'>
            <h1>La photo de la semaine</h1>
                <img src={imageforet}/>
                <p>
                    Petite description de la photo de la semaine.
                </p>
            {/* <HomeSlider/> */}
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