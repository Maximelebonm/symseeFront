import { Link } from 'react-router-dom'
import './listeArticleScreen.css'

export const ListeArticleScreen = () => {
    return (
        <div id='homePanelScreenContainer'>
        
        <Link to='/admin/article/:id'>
            <div>
                article 1
            </div>
        </Link>
        <Link to='/admin/article/:id'>
            <div>
                article 2
            </div>
        </Link>
        </div>
    );
}