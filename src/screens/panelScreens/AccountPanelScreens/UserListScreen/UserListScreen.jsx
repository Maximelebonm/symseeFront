import { Link, useNavigate } from 'react-router-dom'
import './UserListScreen.css'
import { useEffect, useState } from 'react';
import { getAllUsersApi, lockUserApi, unlockUserApi } from '../../../../api/user.backend';
import { Modal } from '../../../../components/modal/Modal';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { MdLock, MdLockOpen } from 'react-icons/md';
import { ArrowLeft, Search } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

export const UserListScreen = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [actionType, setActionType] = useState(null); // 'lock' ou 'unlock'
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await getAllUsersApi();
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleActionClick = (user, type) => {
        setSelectedUser(user);
        setActionType(type);
        setShowModal(true);
    }

    const confirmAction = async () => {
        if (!selectedUser?.Id_user) {
            toast.error("Utilisateur invalide.");
            setShowModal(false);
            return;
        }

        try {
            if (actionType === 'lock') {
                await lockUserApi(selectedUser.Id_user);
                toast.success('Utilisateur verrouillé');
            } else if (actionType === 'unlock') {
                await unlockUserApi(selectedUser.Id_user);
                toast.success('Utilisateur déverrouillé');
            }
            fetchUsers();
        } catch (error) {
            toast.error("Une erreur est survenue");
        } finally {
            setShowModal(false);
            setSelectedUser(null);
            setActionType(null);
        }
    }

    const filteredUsers = users.filter(user =>
        `${user.firstName} ${user.lastName} ${user.email}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="liste-user-container">
            <ToastContainer />

            <div className="liste-user-header">
                <h1>Liste des utilisateurs</h1>
            </div>

            <div className="liste-user-search">
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Rechercher un utilisateur..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table className="liste-user-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.Id_user}>
                            <td>{user.lastName}</td>
                            <td>{user.firstName}</td>
                            <td>{user.email}</td>
                            <td>{user.role?.name}</td>
                            <td>
                                {user.deleted_date ? (
                                    <span className="badge badge-locked">Verrouillé</span>
                                ) : (
                                    <span className="badge badge-active">Actif</span>
                                )}
                            </td>
                            <td className="liste-user-actions">
                                <Link to={`/user/edit/${user.Id_user}`}>
                                    <HiOutlinePencilSquare size={20} />
                                </Link>
                                {user.deleted_date ? (
                                    <MdLockOpen
                                        size={20}
                                        onClick={() => handleActionClick(user, 'unlock')}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ) : (
                                    <MdLock
                                        size={20}
                                        onClick={() => handleActionClick(user, 'lock')}
                                        style={{ cursor: 'pointer' }}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <Modal
                    handleDelete={confirmAction}
                    onClose={() => setShowModal(false)}
                    message={`Êtes-vous sûr de vouloir ${actionType === 'lock' ? 'verrouiller' : 'déverrouiller'} ${selectedUser?.firstName} ${selectedUser?.lastName} ?`}
                />
            )}
        </div>
    );
}