import './organisationScreen.css';
import DenisSemaille from '../../assets/photo/equipe/DenisSemaille.jpg';
import GeorgesFlamengt from '../../assets/photo/equipe/GeorgesFlamengt.jpg';
import HenriQuoniou from '../../assets/photo/equipe/HenriQuoniou.jpg';
import JeanFrançois from '../../assets/photo/equipe/JeanFrançois.jpg';
import MichelVeniat from '../../assets/photo/equipe/MichelVeniat.jpg';
import { TitleH1 } from './../../components/uiElements/TitleH1/TitleH1';

export const OrganisationScreen = ()=>{
    return (
        <div className='organisationScreenContainer'>      
            <div>
                <TitleH1 title={'MEMBRES DU BUREAU'}/>
                <div className='organisationItem'>
                    <div className='organisationImgContainer'>
                        <img src={GeorgesFlamengt} className='organisationImg'/>
                    </div>
                    <div className='organisationTextContainer'>
                        <p>Mr Georges FLAMENGT</p>
                        <p className='organisationFonction'>PRESIDENT</p>
                    </div>
                </div>
                <div className='organisationVicePres'>
                    <div className='organisationItem'>
                        <div className='organisationImgContainer'>
                            <img src={HenriQuoniou} className='organisationImg'/>
                        </div>
                        <div className='organisationTextContainer'>
                            <p>Mr Henri QUONIOU</p>
                            <p className='organisationFonction'>1er VICE PRESIDENT</p>
                        </div>
                    </div>
                    <div className='organisationItem'>
                        <div className='organisationImgContainer'>
                            <img src={MichelVeniat} className='organisationImg'/>
                        </div>
                        <div className='organisationTextContainer'>
                            <p>Mr Michel VENIAT</p>
                            <p className='organisationFonction'>2eme VICE PRESIDENT</p>
                        </div>
                    </div>
                    <div className='organisationItem'>
                        <div className='organisationImgContainer'>
                            <img src={DenisSemaille} className='organisationImg'/>
                        </div>
                        <div className='organisationTextContainer'>
                            <p>Mr Denis SEMAILLE</p>
                            <p className='organisationFonction'>3eme VICE PRESIDENT</p>
                        </div>
                    </div>
                </div>
                <div className='organisationItem'>
                    <div className='organisationImgContainer'>
                        <img src={JeanFrançois} className='organisationImg'/>
                    </div>
                    <div className='organisationTextContainer'>
                        <p>Mr Jean-François DELATTRE</p>
                        <p className='organisationFonction'>SECRETAIRE</p>
                    </div>
                </div>
                <div>
                <p>Ainsi qu&apos;un total de 152 élus pour représenter 6 EPCI-FP</p>
                </div>
            </div>
            <div id='organisationTeam'>
                <h1>L&apos;ÉQUIPE</h1>
                <div>
                    Sandrine LEBON : Secrétaire administrative
                </div>
                <div>
                    Michaël MEUNIER : Directeurs des Services Techniques / animateur de rivière
                </div>
                <div>
                    Animateur érosion
                </div>
                <div>
                    Agents Techniques
                </div>
            </div>
        </div>
    )
}