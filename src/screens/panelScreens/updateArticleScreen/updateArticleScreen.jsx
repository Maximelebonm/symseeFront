import { Link } from 'react-router-dom'
import './updateArticleScreen.css'

export const UpdateArticleScreen = () => {
    return (
        <div id='homePanelScreenContainer'>
                <Link className='LinkBack' to='/admin/homePanel'>
                <button>Retour Home</button></Link>
                <h1>UpdateArticle</h1>
        </div>
    );
}