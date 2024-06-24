import { Link } from 'react-router-dom'
import './homePanelScreen.css'
import { FilePlus } from 'lucide-react'
import { List } from 'lucide-react'

export const HomePanelScreen = () => {

    return (
        <div id='homePanelScreenContainer'>
        <Link to='/admin/panel/create' className='HomePanelscreenItemContainer'>
            <div>
                créer un article
            </div>
            <FilePlus />
        </Link>
        <Link to='/admin/panel/list' className='HomePanelscreenItemContainer'>
            <div >
                Liste d'article
            </div>
            <List />
        </Link>
        </div>
    )
}