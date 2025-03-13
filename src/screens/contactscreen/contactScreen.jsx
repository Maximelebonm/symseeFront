import './contactScreen.css';
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect,useState } from 'react';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';


export const ContactScreen =()=> {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
      // Vérifie si l'appareil est mobile
      const mobileCheck = /android|iphone|ipad|ipod|blackberry|windows phone|webos/i.test(userAgent);
      setIsMobile(mobileCheck);
    }, []);
    
    return (
        <div id='constactScreenContainer'>
        
            <TitleH1 title={'CONTACT'}/>
            <div className='ContactItemContainer'>
                <p>
                    Syndicat Mixte du Sud Est de l’Escaut
                </p>
                <p>
                    9 rue Jules Guesde
                </p>
                <p>
                    59730 SOLESMES
                </p>
            </div>
            <div className='ContactItemContainer'>
                <p>
                    email : syndicat.selle@wanadoo.fr
                </p>
                <p>
                    Telephone : 03.27.37.30.93
                </p>
                    {
                    isMobile ? 
                    <a href={`tel:0327373093`} className="phoneButton"><FaPhoneAlt /> Appeler</a>
                        : null
                    }
                </div>
                <div className='ContactItemContainer'>

                <TitleH1 title={'POUR TOUTES URGENCES'}/>
                </div>
            <div className='ContactItemContainer'>
                <h3>
                    M. Sébastien DELSART, chef d&apos;équipe
                </h3>
                <p>
                    Téléphone : 06 40 22 78 32
                </p>
                {
                   isMobile ? 
                <a href={`tel:0640227832`}  className="phoneButton"><FaPhoneAlt /> Appeler</a>
                    : null
                }
            </div>
            <div className='ContactItemContainer'>
            <h3>
                M. Raphaël DELCROIX, animateur érosion
            </h3>
            <p>
                Téléphone : 07 86 70 36 89
            </p>
                {
                   isMobile  ? 
                <a href={`tel:0786703689`}  className="phoneButton"><FaPhoneAlt /> Appeler</a>
                    : null
                }
            </div>
            <div className='ContactItemContainer'>
            <h3>
                Mme Amandine RAUX, Animatrice rivière
            </h3>
            <p>
                Téléphone : 06 30 53 32 84
            </p>
                {
                   isMobile  ? 
                <a href={`tel:0630533284`}  className="phoneButton"><FaPhoneAlt /> Appeler</a>
                    : null
                }
            </div>
        </div>
    )
}