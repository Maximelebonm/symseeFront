import { useState } from 'react'
import { BassinVersant } from '../../components/SvgComponent/cartes/bassinVersant/bassinVersant'
import { CoursDeau } from '../../components/SvgComponent/cartes/coursDeau/coursDeau'
import { Interco } from '../../components/SvgComponent/cartes/interco/interco'
import './gemapiScreen.css'
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1'

export const GemapiScreen = () => {
    const [map,setMap] = useState(true);

    return (
        <div id="aboutUsScreenContainer">
            <div className='aboutUsScreenItem'>
                   <TitleH1 title={'MEMBRES DU BUREAU'}/>
                <div className='aboutUsParagrapheContainer'>
                    <p className='aboutUsParagraphe'>
                        Le Syndicat Mixte du Sud Est de l’Escaut, précédemment connu sous le nom de Syndicat Mixte du Bassin de la Selle, gère la compétence GEMAPI pour six établissements publics de coopération intercommunale (EPCI). 
                    </p>
                    <p className='aboutUsParagraphe'>
                        Son objectif est de gérer 245 km de cours d&apos;eau, affluents du Fleuve Escaut, répartis sur un territoire de 40 000 hectares englobant 72 communes. 
                    </p>
                    <p className='aboutUsParagraphe'>
                        Les six EPCI concernés sont : la Communauté d’Agglomération de la Porte du Hainaut, la Communauté d’Agglomération Valenciennes Métropole, la Communauté d’Agglomération Caudrésis-Catésis, la Communauté de Communes du Pays Solesmois, La communauté de Communes Thiérache Sambre et Oise, et la Communauté de Communes du Pays de Mormal. 
                    </p>
                    <p className='aboutUsParagraphe'>
                        Parmi les cours d&apos;eau gérés figurent La Selle, Le Béart, la rivière des Essarts, le ruisseau du Cambrésis, le Rogneau, L’Ecaillon aval, Le Vieil Escaut, La Naville, La Naville Tortue, la Sensée aval, et la rivière du Moulin…
                    </p>
                    <div id='gemapiMap'>
                        {map ?  <BassinVersant className='map'/> : <Interco className='map'/> }
                        <button id={'button'} onClick={()=>setMap(!map)}>{map ? 'voir Intercomunalité' : 'voir bassin versant'} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}