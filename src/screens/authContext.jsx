import { createContext, useState, useEffect, useContext } from 'react';
import { getAuthApi } from '../api/user.backend';
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null); // null = pas encore chargé
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAuthApi();
        if (response.status === 200) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          setUserDetails({});
        }
      } catch (err) {
        setUserDetails({});
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};