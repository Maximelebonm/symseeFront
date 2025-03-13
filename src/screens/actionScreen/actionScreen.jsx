import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1'
import './actionScreen.css'
import strategie from '../../assets/photo/actions/strategie.jpg';
import action from '../../assets/photo/actions/action.jpg';
import gemapi from '../../assets/photo/actions/gemapi.jpg';
import { TbHomeShield } from "react-icons/tb";
import { FaHandHoldingWater } from "react-icons/fa";
import { LuLayers3 } from "react-icons/lu";

export const ActionScreen = () => {
    return (
        <div id="aboutUsScreenContainer">
            <div className='aboutUsScreenItem'>
                <TitleH1 title={'NOS ACTIONS'} />
                <h2>Protéger l&apos;eau, la biodiversité et les territoires avec la GEMAPI</h2>
                <div className='aboutUsParagrapheContainer'>
                    <div className='aboutUsParagraphe'>
                    <TbHomeShield className='IconAction'/>
                        <h3>
                            Gestion des Milieux Aquatiques et Prévention des Inondations (GEMAPI) :
                        </h3>
                        <ul>
                            <li><strong>Entretien et restauration des cours d’eau : </strong>Assurer un bon état écologique et prévenir les risques liés aux crues.</li>
                            <li><strong>Lutte contre les coulées de boue : </strong>
                            Mettre en place et entretenir des ouvrages d’hydraulique douce (haies, fascines, bandes enherbées) pour réduire l’érosion des sols et limiter les apports de sédiments dans les rivières.</li>
                        </ul>
                    </div>
                    <div className="ActionImageContainer">
                        <div className="ActionImageText">Exemple d&apos;aménagement d&apos;hydraulique douce pour lutter contre l&apos;érosion des sols : Fascine de paille + plantation de haies</div>
                        <img src={action}/>
                    </div>
                </div>
                <div className='aboutUsParagrapheContainer'>
                    <div className='aboutUsParagraphe'>
                    
                        <LuLayers3 className='IconAction'/>
                        <h3>Stratégie :</h3>
                        <p>Une gestion réactive et de proximité, grâce à une équipe de 10 agents en régie. Cette organisation permet d’intervenir rapidement pour répondre aux besoins du territoire et garantir la continuité des actions.</p>
                    </div>
                    <div className="ActionImageContainer">
                        <div className="ActionImageText">Exemple d&apos;intervention en rivière : retrait d&apos;un arbre tombé.</div>
                        <img src={strategie}/>
                    </div>
                </div>
                <div className='aboutUsParagrapheContainer'>
                    <div className='aboutUsParagraphe'>
                    <FaHandHoldingWater className='IconAction'/>
                        <h3>Travailler avec la GEMAPI c&apos;est :</h3>
                        <ul>
                            <li><strong>Augmenter la quantité d’eau :</strong> Favoriser le stockage naturel dans les nappes grâce aux zones humides et aux interactions entre nappes et rivières.</li>
                            <li>
                                <strong>Améliorer la qualité de l’eau :</strong> Réduire les pollutions et limiter les dépôts dans les cours d’eau.
                            </li>
                            <li>
                                <strong>Protéger la biodiversité </strong>: Préserver les habitats naturels et les corridors écologiques
                            </li>
                            <li>
                                <strong>Améliorer la qualité de vie :</strong> Réduire les risques d’inondations tout en valorisant les paysages et les écosystèmes locaux.
                            </li>
                        </ul>
                    </div>
                    <div className="ActionImageContainer">
                        <div className="ActionImageText">Exemple d&apos;animation sur le territoire : sortie nature organisée par le Conservatoire d&apos;Espaces Naturels Hauts-de-France en partenariat avec le SYMSEE.</div>
                        <img src={gemapi}/>
                    </div>
                </div>
            </div>
        </div>
    )
}