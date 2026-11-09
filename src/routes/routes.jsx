import {Route, Routes, Navigate } from 'react-router-dom';
import { HomeScreen } from '../screens/homeScreen/homeScreen';
import { ContactScreen } from '../screens/contactscreen/contactScreen';
import { OrganisationScreen } from '../screens/organisationScreen/organisationScreen';
import { ActionScreen } from '../screens/actionScreen/actionScreen';
import { FieldScreen } from '../screens/fieldScreen/fieldScreen';
import { DocumentsScreen } from '../screens/documentsScreen/DocumentsScreen';
import { AppelDoffreScreen } from '../screens/appelDoffreScreen/AppelDoffreScreen.jsx';
import { ConfidentialistyScreen } from '../screens/confidentialityScreen/ConfidentialityScreen.jsx';

import { HomePanelScreen } from '../screens/panelScreens/homePanelScreen/homePanelScreen.jsx';
import { CreateArticleScreen } from '../screens/panelScreens/createArticleScreen/CreateArticleScreen';
import { PanelListeArticleScreen } from '../screens/panelScreens/listArcticleScreen/PanelListeArticleScreen.jsx';

import { LoginScreen } from '../screens/loginScreen/loginScreen.jsx';
import { PrivateRoutes } from './privatesRoutes.jsx';

import { PanelDocScreen } from '../screens/panelScreens/PanelDocScreen/PanelDocScreen.jsx';
import { PanelDocList } from './../screens/panelScreens/PanelDocList/PanelDocList';
import { PanelUpdateDocs } from '../screens/panelScreens/PanelDocUpdate/PanelUpdateDocs.jsx';

import { PanelAppelDoffreScreen } from '../screens/panelScreens/PanelAppelDoffre/Create/PanelAppelDoffreScreen.jsx';
import { PanelAppelDoffreList } from '../screens/panelScreens/PanelAppelDoffre/List/PanelAppelDoffreList.jsx';
import { PanelAppelDoffreUpdate } from '../screens/panelScreens/PanelAppelDoffre/update/PanelAppelDoffreUpdate.jsx';
import { UpdateArticleScreen } from '../screens/panelScreens/updateArticleScreen/updateArticleScreen.jsx';
import { ArticleScreen } from '../screens/articleScreen/articleScreen.jsx';
import { ActuScreen } from '../screens/actuScreen/actuScreen.jsx';
import { PanelLayout } from '../components/LayoutSide/LayoutSide.jsx';
import { UserListScreen } from '../screens/panelScreens/AccountPanelScreens/UserListScreen/UserListScreen.jsx';
import { ProfileScreen } from '../screens/panelScreens/AccountPanelScreens/profileScreen/profileScreen.jsx';
import { useAuthContext } from '../screens/authContext';

const ProtectedRoute = ({ children }) => {
  const { userDetails, isLoading } = useAuthContext();

  if (isLoading) return null; // ou un spinner

  if (!userDetails?.Id_user || !userDetails?.role) {
    return <Navigate to="/panel/login" replace />;
  }

  return children;
};

// ✅ Redirection si déjà connecté
const PublicRoute = ({ children }) => {
  const { userDetails, isLoading } = useAuthContext();

  if (isLoading) return null; // ou un spinner

  if (userDetails?.Id_user && userDetails?.role) {
    return <Navigate to="/panel" replace />;
  }

  return children;
};

export const RoutesContainer = () =>{
    return (
        <Routes>
      <Route 
        path='/panel/login' 
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } 
      />

    {/* Panel protégé avec layout persistant (sidebar) */}
    <Route 
        path='/panel' 
        element={
            <PrivateRoutes role={['administrator','moderator']}>
                <PanelLayout/>
            </PrivateRoutes>
        }
    >
        <Route index element={<HomePanelScreen/>}/>

        <Route path="/panel/profile" element={<ProfileScreen />} />
        <Route path='article/create' element={<CreateArticleScreen/>}/>
        <Route path='article/list' element={<PanelListeArticleScreen/>}/>
        <Route path='article/update/:id' element={<UpdateArticleScreen/>}/>

        <Route path='appeldoffre/create' element={<PanelAppelDoffreScreen/>}/>
        <Route path='appeldoffre/list' element={<PanelAppelDoffreList/>}/>
        <Route path='appeldoffre/update/:id' element={<PanelAppelDoffreUpdate/>}/>

        <Route path='documents/create' element={<PanelDocScreen/>}/>
        <Route path='documents/list' element={<PanelDocList/>}/>
        <Route path='doc/update/:id' element={<PanelUpdateDocs/>}/>
        <Route path='user/list' element={<UserListScreen/>}/>
    </Route>

    {/* Mes routes public */}
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/actualites' element={<ActuScreen/>}/>
    <Route path='/contact' element={<ContactScreen/>}/>
    <Route path='/organisation' element={<OrganisationScreen/>} />
    <Route path='/actions' element={<ActionScreen/>}/>
    <Route path='/communes' element={<FieldScreen/>}/>
    <Route path='/documents' element={<DocumentsScreen/>}/>
    <Route path='/article/:id' element={<ArticleScreen/>}/>
    <Route path='/appeldoffres' element={<AppelDoffreScreen/>}/>
    <Route path='/confidentiality' element={<ConfidentialistyScreen/>}/>
        </Routes>
    )
}
