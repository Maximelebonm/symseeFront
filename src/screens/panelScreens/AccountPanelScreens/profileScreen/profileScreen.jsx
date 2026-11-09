// ProfileScreen.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogOut, Save, User, Mail, Lock } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthContext } from '../../../authContext';
import { updateUserApi, logoutUserApi, getMeApi } from '../../../../api/user.backend';
import './profileScreen.css';

export const ProfileScreen = () => {
    const navigate = useNavigate();
    const { userDetails, setUserDetails } = useAuthContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const data = await getMeApi();
                setUserDetails(prev => ({ ...prev, ...data }));
                setFirstName(data.firstName || '');
                setLastName(data.lastName || '');
                setEmail(data.email || '');
            } catch (error) {
                console.log(error);
                toast.error("Impossible de récupérer votre profil");
            } finally {
                setIsFetching(false);
            }
        };

        fetchMe();
    }, []);

const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
        const payload = {
            firstName,
            lastName,
            email,
        };

        if (password) {
            payload.password = password;
        }

const updatedUser = await updateUserApi(userDetails.Id_user, payload);

    setUserDetails(prev => ({
        ...prev,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
    }));
    console.log(userDetails)

    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        if (error.message.includes('email')) {
            toast.error("Cet email est déjà utilisé");
        } else if (error.message.includes('Utilisateur non trouvé')) {
            toast.error("Utilisateur non trouvé");
        } else {
            toast.error(error.message || "Erreur lors de la mise à jour");
        }
    } finally {
        setIsLoading(false);
    }
};
    const handleLogout = async () => {
        try {
            await logoutUserApi();
            setUserDetails(null);
            toast.success("Déconnexion réussie");
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors de la déconnexion");
        }
    };

    if (isFetching) {
        return (
            <div className="profile-container">
                <p>Chargement du profil...</p>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <ToastContainer />

            <div className="profile-header">
                <button onClick={() => navigate(-1)} className="btn-back">
                    <ArrowLeft size={20} />
                </button>
                <h1>Mon profil</h1>
            </div>

            <div className="profile-content">
                <div className="profile-card">
                    <div className="profile-avatar">
                        <User size={48} />
                    </div>
                    <div className="profile-info-summary">
                        <h2>{firstName} {lastName}</h2>
                        <p>{email}</p>
                        <span className="profile-role-badge">{userDetails?.role}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="profile-form">
                    <h3>Informations personnelles</h3>

                    <div className="form-group">
                        <label htmlFor="firstName">Prénom</label>
                        <div className="input-with-icon">
                            <User size={18} />
                            <input
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Nom</label>
                        <div className="input-with-icon">
                            <User size={18} />
                            <input
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-with-icon">
                            <Mail size={18} />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="profile-actions">
                        <button
                            type="button"
                            className="btn-logout"
                            onClick={handleLogout}
                        >
                            <LogOut size={18} />
                            Se déconnecter
                        </button>

                        <button
                            type="submit"
                            className="btn-save"
                            disabled={isLoading}
                        >
                            <Save size={18} />
                            {isLoading ? 'Enregistrement...' : 'Enregistrer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};