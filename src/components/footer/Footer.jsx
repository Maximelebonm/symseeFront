import { SliderPartenaires } from "../sliderPartenaires/SliderPartenaires";
import MemoFooterFish from "../SvgComponent/footerFish/footerFish";
import MemoFooterWave from "../SvgComponent/footerWave/footerWave";
import { TitleH1 } from "../uiElements/TitleH1/TitleH1";
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = ()=>{
    return (
        <div id="footer">
        <div id='footerTitleContainer'>
            <TitleH1 title={'Partenaires'} idTitle='footerCarpTitle' idFish='footerCarpSvg' id='footerTitle'/>
        </div>
            <SliderPartenaires/>
            <div>
                <MemoFooterWave id='wave'/>
                <MemoFooterFish id='fish'/>
            </div>
            <div id='footerCopyright'>
                copyright © - <Link to='/confidentiality' > Politique de confidentialité </Link>
            </div>
        </div>
    )
}