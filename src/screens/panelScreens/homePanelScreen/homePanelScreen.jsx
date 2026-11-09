import './homePanelScreen.css';
import { Rocket, Wrench, Sparkles, Bug, LogOut } from 'lucide-react';
import { useAuthContext } from '../../authContext';
import { useNavigate } from 'react-router-dom';

const changelogData = [
  {
    version: '1.3.0',
    date: '19 août 2026',
    changes: [
      { type: 'seo', text: "Amélioration du référencement Google : le site sera mieux trouvé par les internautes lors de recherches" },
      { type: 'fix', text: "Correction de l'icône affichée dans l'onglet du navigateur (qui apparaissait sur fond blanc)" },
      { type: 'improvement', text: "Nouvelle organisation de l'espace d'administration pour une navigation plus simple et rapide" },
    ]
  },
  {
    version: '1.2.0',
    date: '15 août 2026',
    changes: [
      { type: 'improvement', text: "Amélioration visuelle de l'en-tête et de la page d'accueil du site" },
      { type: 'improvement', text: "Refonte des formulaires de création/modification (actualités, appels d'offre, documents)" },
    ]
  },
];

const iconByType = {
  feature: <Rocket size={18} />,
  fix: <Bug size={18} />,
  improvement: <Sparkles size={18} />,
  seo: <Wrench size={18} />,
};

const labelByType = {
  feature: 'Nouveauté',
  fix: 'Correction',
  improvement: 'Amélioration',
  seo: 'Référencement',
};

export const HomePanelScreen = () => {
  const { userDetails, setUserDetails } = useAuthContext();
  const navigate = useNavigate();

  const allowedRoles = ['administrator', 'moderator'];
  const hasValidRole = allowedRoles.includes(userDetails?.role);

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    } finally {
      setUserDetails(null);
      navigate('/panel/login');
    }
  };

  console.log(hasValidRole)

  return (
    <div id="panelHomeContainer">
      <div className="panelHomeHeader">
        <h1>Bienvenue dans votre espace d'administration</h1>
        <p>Retrouvez ci-dessous les dernières mises à jour effectuées sur votre site</p>

        {!hasValidRole && (
          <div className="panelHomeReconnectBox">
            <p>Votre session semble invalide ou expirée. Merci de vous reconnecter.</p>
            <button className="panelHomeLogoutBtn" onClick={handleLogout}>
              <LogOut size={16} />
              Se déconnecter
            </button>
          </div>
        )}
      </div>

      <div className="panelHomeTimeline">
        {changelogData.map((entry) => (
          <div key={entry.version} className="panelHomeEntry">
            <div className="panelHomeEntryHeader">
              <span className="panelHomeDate">{entry.date}</span>
            </div>
            <ul className="panelHomeList">
              {entry.changes.map((change, i) => (
                <li key={i} className={`panelHomeItem panelHomeItem--${change.type}`}>
                  <span className="panelHomeIcon">{iconByType[change.type]}</span>
                  <span className="panelHomeBadge">{labelByType[change.type]}</span>
                  <span className="panelHomeText">{change.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};