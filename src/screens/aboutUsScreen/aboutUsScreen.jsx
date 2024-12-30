import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1'
import './aboutUsScreen.css'

export const AboutUsScreen = () => {
    return (
        <div id="aboutUsScreenContainer">
            <div className='aboutUsScreenItem'>
                <TitleH1 title={'INTRODUCTION'} />
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
                </div>
            </div>
        </div>
    )
}