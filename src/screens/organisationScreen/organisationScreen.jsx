import './organisationScreen.css';
import DenisSemaille from '../../assets/photo/equipe/DenisSemaille.jpg';
import GeorgesFlamengt from '../../assets/photo/equipe/GeorgesFlamengt.jpg';
import HenriQuoniou from '../../assets/photo/equipe/HenriQuoniou.jpg';
import JeanFrançois from '../../assets/photo/equipe/JeanFrançois.jpg';
import MichelVeniat from '../../assets/photo/equipe/MichelVeniat.jpg';
import { TitleH1 } from './../../components/uiElements/TitleH1/TitleH1';
import { MdGroups } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaUserTie,FaUser  } from "react-icons/fa6"; // user cravate
import { LiaUsersSolid } from "react-icons/lia"; // techniciens
import { FaHardHat } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";

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
                        <h2>Mr Georges FLAMENGT</h2>
                        <p className='organisationFonction'>PRÉSIDENT</p>
                    </div>
                </div>
                <div className='organisationVicePres'>
                    <div className='organisationItem'>
                        <div className='organisationImgContainer'>
                            <img src={HenriQuoniou} className='organisationImg'/>
                        </div>
                        <div className='organisationTextContainer'>
                            <h2>Mr Henri QUONIOU</h2>
                            <p className='organisationFonction'>1er VICE-PRÉSIDENT</p>
                        </div>
                    </div>
                    <div className='organisationItem'>
                        <div className='organisationImgContainer'>
                            <img src={MichelVeniat} className='organisationImg'/>
                        </div>
                        <div className='organisationTextContainer'>
                            <h2>Mr Michel VENIAT</h2>
                            <p className='organisationFonction'>2eme VICE-PRÉSIDENT</p>
                        </div>
                    </div>
                    <div className='organisationItem'>
                        <div className='organisationImgContainer'>
                            <img src={DenisSemaille} className='organisationImg'/>
                        </div>
                        <div className='organisationTextContainer'>
                            <h2>Mr Denis SEMAILLE</h2>
                            <p className='organisationFonction'>3eme VICE-PRÉSIDENT</p>
                        </div>
                    </div>
                </div>
                <div className='organisationItem'>
                    <div className='organisationImgContainer'>
                        <img src={JeanFrançois} className='organisationImg'/>
                    </div>
                    <div className='organisationTextContainer'>
                        <h2>Mr Jean-François DELATTRE</h2>
                        <p className='organisationFonction'>SECRÉTAIRE</p>
                    </div>
                </div>
                <div id='elusSection'>     
                    <p>Ainsi qu&apos;un total de 152 élus pour représenter 6 EPCI-FP</p>
                    <MdGroups className='OrganIcon'/>
                </div>
            </div>
            <div id='organisationTeam'>
                <TitleH1 title={"L'ÉQUIPE"}/>
                <div>

       
                <div>
                    <SlUserFemale className='smallIcon'/>
                    <p>
                        Une responsable administrative et comptable
                    </p>
                </div>
                <div>
                    <FaUserTie className='smallIcon'/>
                    <p>
                    Un animateur rivière
                    </p>
                </div>
                <div>
                    <FaUser className='smallIcon'/>
                    <p>
                    Un animateur érosion des sols
                    </p>
                </div>
                <div>
                    <FaHardHat className='smallIcon'/>
                    <p>
                    Un chef d&apos;équipe terrain
                    </p>
                </div>
                <div>
                    <LiaUsersSolid className='smallIcon'/>
                    <p>
                        9 agents de terrain
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}