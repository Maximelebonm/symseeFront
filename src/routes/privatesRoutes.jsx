import { useEffect } from "react";
import { useAuthContext } from "../screens/authContext";
import { useNavigate } from 'react-router-dom';

export const PrivateRoutes = ({ children, role }) => {
    const { userDetails, isLoading } = useAuthContext();
    const navigate = useNavigate();

    const roleName = userDetails?.role;

    const hasAccess = Array.isArray(role)
        ? role.includes(roleName)
        : roleName === role;

    useEffect(() => {
        if (isLoading) return;

        // ✅ Vérifie avec Id_user plutôt que roleName
        // (Id_user persiste même pendant les mises à jour)
        if (!userDetails?.Id_user) {
            navigate('/panel/login');
            return;
        }

        if (!hasAccess) {
            navigate('/panel/login');
        }
    }, [userDetails?.Id_user, hasAccess, isLoading, navigate]);

    if (isLoading) return null;

    if (!roleName || !hasAccess) {
        return null;
    }

    return children;
};