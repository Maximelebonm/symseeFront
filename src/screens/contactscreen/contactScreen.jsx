import './contactScreen.css';
import { FaPhoneAlt,FaEnvelope  } from "react-icons/fa";
import { useEffect,useState } from 'react';


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
            <h1>CONTACT</h1>
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
            <h2>POUR TOUTES URGENCES</h2>
            <div className='ContactItemContainer'>
                <p>
                    M.Sebastien DELSART
                </p>
                <p>
                    Telephone : 06.40.22.78.32
                </p>
                {
                   isMobile ? 
                <a href={`tel:0640227832`}  className="phoneButton"><FaPhoneAlt /> Appeler</a>
                    : null
                }
            </div>
            <div className='ContactItemContainer'>
            <p>
                M.Michaël MEUNIER
            </p>
            <p>
                Telephone : 06.30.53.32.84
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