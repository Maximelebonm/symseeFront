import { useEffect } from 'react';
import { loginUserApi } from '../../api/user.backend';
import './loginScreen.css'
import { useAuthContext } from '../authContext';

export const LoginScreen = () => {
  const {userDetails} = useAuthContext();
  useEffect(() => {
    // if(userDetails !== undefined && document.cookie !== null){
    //   window.location.href = '/panel';
    // }
  }
  , [])

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const data = new FormData(form);
      const email = data.get('email');
      const password = data.get('password');
  
      const fetch = async() => {
      const response = await loginUserApi(email, password);
      console.log(response);
      if(response.message === 'connection autorisé'){
        window.location.href = '/panel';
      }
    }
    fetch()
    }
    catch (error) {
      console.log(error);
    }
  }

    return (
        <div id='loginContainer'>
          <form id='loginForm' onSubmit={handleSubmit}>
            <div className="loginItem">
              <label>
                Nom d&apos;utilisateur:
              </label>
              <input type="email" name="email" />
            </div>
            <div className="loginItem">
              <label>
                Mot de passe:
              </label>
                <input type="password" name="password" />
            </div>
            <button type="submit" value="Se connecter" >se connecter</button>
          </form>
        </div>
    )
}