// export const LogoutButton = () => {
//     const { setUserDetails } = useAuthContext();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//         // ou le nom exact de ton cookie
//         setUserDetails(null);
//         navigate('/panel/login');
//     };

//     return <button onClick={handleLogout}>Se déconnecter</button>;
// };