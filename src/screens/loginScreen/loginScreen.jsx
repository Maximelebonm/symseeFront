import { useEffect, useState } from 'react';
import { getAuthApi, loginUserApi } from '../../api/user.backend';
import './loginScreen.css'
import { useAuthContext } from '../authContext';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { logoutUserApi } from '../../api/user.backend';

// LoginScreen.jsx
export const LoginScreen = () => {
  const { userDetails, setUserDetails } = useAuthContext();
  const navigate = useNavigate();

  console.log(userDetails)
  // ✅ Une SEULE fois au montage
  useEffect(() => {
    if (userDetails?.Id_user && userDetails?.role) {
      // L'utilisateur est déjà connecté et a un rôle
      navigate('/panel', { replace: true });
    }
  }, []); // ⚠️ VIDE ! Sinon ça reboucle

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const data = new FormData(form);
      const email = data.get('email');
      const password = data.get('password');

      const response = await loginUserApi(email, password);

      if (response.status === 200) {
        const jsonData = await response.json();

        if (jsonData.message === 'connection autorisé') {
          const authResponse = await getAuthApi();
          if (authResponse.status === 200) {
            const authData = await authResponse.json();
            setUserDetails(authData); // Ça met à jour le contexte
            
            // ✅ Ne pas faire de navigate ici !
            // Le useEffect du parent (ou un effet au niveau du router) 
            // gèrera la redirection
          }
        } else if (jsonData.message === 'mot de passe incorrect') {
          toast.error('Mot de passe incorrect', { autoClose: 2000 });
        } else if (jsonData.message === 'email invalide') {
          toast.error('Email incorrect', { autoClose: 2000 });
        }
      }
    } catch (error) {
      toast.error('Erreur de connexion', { autoClose: 2000 });
    }
  };

  return (
    <>
      <ToastContainer />
      <div id='loginContainer'>
        <form id='loginForm' onSubmit={handleSubmit}>
          <div className="loginItem">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div className="loginItem">
            <label>Mot de passe:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
};