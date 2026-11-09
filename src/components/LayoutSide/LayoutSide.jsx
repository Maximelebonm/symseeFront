// panelLayout.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FilePen, List, Hammer, UserCircle2, ScrollText, User, LogOut } from 'lucide-react';
import { GrDocumentPdf } from "react-icons/gr";
import { useAuthContext } from '../../screens/authContext';
import { logoutUserApi } from '../../api/user.backend';
import './LayoutSide.css';

const menuItems = [
    {
        label: 'Actualités',
        items: [
            { to: '/panel/article/create', label: 'Créer une actualité', icon: <FilePen size={20} /> },
            { to: '/panel/article/list', label: 'Modifier une actualité', icon: <List size={20} /> },
        ]
    },
    {
        label: 'Appels d\'offre',
        items: [
            { to: '/panel/appeldoffre/create', label: 'Créer un appel d\'offre', icon: <Hammer size={20} /> },
            { to: '/panel/appeldoffre/list', label: 'Modifier un appel d\'offre', icon: <Hammer size={20} /> },
        ]
    },
    {
        label: 'Documents',
        items: [
            { to: '/panel/documents/create', label: 'Ajouter un document', icon: <GrDocumentPdf size={20} /> },
            { to: '/panel/documents/list', label: 'Modifier un document', icon: <GrDocumentPdf size={20} /> },
        ]
    },
    {
        label: 'Gestion Profil',
        items: [
            { to: '/panel/profile', label: 'Mon Profil', icon: <UserCircle2 size={20} /> },
        ]
    },
    {
        label: 'Utilisateurs',
        adminOnly: true, // ← nouveau flag
        items: [
            { to: '/panel/user/list', label: 'Gestion des utilisateurs', icon: <UserCircle2 size={20} /> },
        ]
    },
];

export const PanelLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userDetails, setUserDetails } = useAuthContext();

    const isActive = (path) => location.pathname === path;

    const role = userDetails?.role;

    // Filtrer les groupes selon le rôle
    const visibleMenuItems = menuItems.filter(group => {
        if (group.adminOnly && role !== 'administrator') {
            return false;
        }
        return true;
    });

    const handleLogout = async () => {
        try {
            await logoutUserApi();
        } catch (error) {
            console.log(error);
        } finally {
            setUserDetails(null);
            navigate('/');
        }
    };

    return (
        <div id="panelLayoutContainer">
            <aside id="panelSidebar">
                <div id="panelSidebarHeader">
                    <h2>Panel Admin</h2>
                </div>
                <nav>
                    <div className="panelMenuGroup">
                        <ul>
                            <li>
                                <Link
                                    to='/panel'
                                    className={`panelMenuItem ${isActive('/panel') ? 'active' : ''}`}
                                >
                                    <ScrollText size={20} />
                                    <span>Mises à jour</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {visibleMenuItems.map((group, i) => (
                        <div className="panelMenuGroup" key={i}>
                            <span className="panelMenuGroupLabel">{group.label}</span>
                            <ul>
                                {group.items.map((item, j) => (
                                    <li key={j}>
                                        <Link
                                            to={item.to}
                                            className={`panelMenuItem ${isActive(item.to) ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                                            onClick={(e) => item.disabled && e.preventDefault()}
                                            aria-disabled={item.disabled}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            <main id="panelContent">
                <Outlet />
            </main>
        </div>
    );
};