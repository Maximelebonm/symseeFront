import { Link } from 'react-router-dom'
import './homePanelScreen.css'
import { FilePlus,FilePen  } from 'lucide-react'
import { List,Hammer  } from 'lucide-react'
import { GrDocumentPdf } from "react-icons/gr";

export const HomePanelScreen = () => {

    return (
        <div id='homePanelScreenContainer'>
        <Link to='/panel/article/create' className='HomePanelscreenItemContainer'>
            <div>
                Créer un article
            </div>
            <FilePen size={36}/>
        </Link>
        <Link to='/panel/article/list' className='HomePanelscreenItemContainer'>
            <div >
                Modifier un Article
            </div>
            <List size={36}/>
        </Link>
            <Link to='/panel/appeldoffre/create' className='HomePanelscreenItemContainer'>
                <div >
                    appel d&apos;offre
                </div>
                <Hammer size={36}/>
            </Link>
            <Link to='/panel/appeldoffre/list' className='HomePanelscreenItemContainer'>
                <div >
                    Modifier appel d&apos;offre
                </div>
                <Hammer size={36}/>
            </Link>

            <Link to='/panel/documents/create' className='HomePanelscreenItemContainer'>
                <div >
                    Ajouter un document
                </div>
                <GrDocumentPdf />
            </Link>
            <Link to='/panel/documents/list' className='HomePanelscreenItemContainer'>
                <div >
                    Modifier un document
                </div>
                <GrDocumentPdf />
            </Link>
        </div>
    )
}