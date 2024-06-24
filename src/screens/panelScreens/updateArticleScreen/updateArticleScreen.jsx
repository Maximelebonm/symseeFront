import { Link } from 'react-router-dom'
import './updateArticleScreen.css'

export const UpdateArticleScreen = () => {
    return (
        <div id='homePanelScreenContainer'>
        <Link to='/admin/liste'>
            <div>
                Liste d'article
            </div>
        </Link>
        <Link to='/admin/create'>
            <div>
                créer un article
            </div>
        </Link>
        </div>
    );
}