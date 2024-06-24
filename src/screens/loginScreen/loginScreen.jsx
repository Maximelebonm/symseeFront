import { Link } from 'react-router-dom'
import './loginScreen.css'

export const LoginScreen = () => {

    return (
        <div id='adminScreenContainer'>
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
    )
}