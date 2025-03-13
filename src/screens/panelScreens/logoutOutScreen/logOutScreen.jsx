import './logOutScreen.css';

export const LogOutScreen = () => {
    return (
        <div id='logOutScreenContainer'>
                <Link className='LinkBack' to='/panel'>
                <button>Retour Home</button></Link>
            <h1>Vous êtes déconnecté</h1>
        </div>
    )
}