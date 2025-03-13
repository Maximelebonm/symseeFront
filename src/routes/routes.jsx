import {Route, Routes} from 'react-router-dom';
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
// import { UpdateArticleScreen } from '../screens/panelScreens/updateArticleScreen/updateArticleScreen.jsx';
import { LoginScreen } from '../screens/loginScreen/loginScreen.jsx';
import { PrivateRoutes } from './privatesRoutes.jsx';

import { PanelDocScreen } from '../screens/panelScreens/PanelDocScreen/PanelDocScreen.jsx';
import { PanelDocList } from './../screens/panelScreens/PanelDocList/PanelDocList';
import { PanelUpdateDocs } from '../screens/panelScreens/PanelDocUpdate/PanelUpdateDocs.jsx';

import { PanelAppelDoffreScreen } from '../screens/panelScreens/PanelAppelDoffre/Create/PanelAppelDoffreScreen.jsx';
import { PanelAppelDoffreList } from '../screens/panelScreens/PanelAppelDoffre/List/PanelAppelDoffreList.jsx';
import { PanelAppelDoffreUpdate } from '../screens/panelScreens/PanelAppelDoffre/update/PanelAppelDoffreUpdate.jsx';


export const RoutesContainer = () =>{
    return (
        <Routes>
          <Route path='/panel/login' element={<LoginScreen/>}/>
          <Route path={'/panel'} element={ 
          <PrivateRoutes role={'administrator'}><HomePanelScreen/></PrivateRoutes>}/>
          <Route path={'/panel/article/create'} element={ <PrivateRoutes role={'administrator'}><CreateArticleScreen/></PrivateRoutes>}/>
          <Route path={'/panel/article/list'} element={ <PrivateRoutes role={'administrator'}><PanelListeArticleScreen/></PrivateRoutes>}/>

          <Route path={'/panel/appeldoffre/create'} element={<PrivateRoutes role={'administrator'}><PanelAppelDoffreScreen/></PrivateRoutes>}/>
          <Route path={'/panel/appeldoffre/list'} element={<PrivateRoutes role={'administrator'}><PanelAppelDoffreList/></PrivateRoutes>}/>
          <Route path={'/panel/appeldoffre/update/:id'} element={<PrivateRoutes role={'administrator'}><PanelAppelDoffreUpdate/></PrivateRoutes>}/>

          <Route path={'/panel/documents/create'} element={ 
            <PrivateRoutes role={'administrator'}><PanelDocScreen/></PrivateRoutes>}
          />
          <Route path={'/panel/documents/list'} element={ 
            <PrivateRoutes role={'administrator'}><PanelDocList/></PrivateRoutes>}
          />
                    <Route path={'/panel/doc/update/:id'} element={ 
            <PrivateRoutes role={'administrator'}><PanelUpdateDocs/></PrivateRoutes>}
          />
            {/* Mes routes public */}
            <Route path='/' element={<HomeScreen/>}/>
        
            {/* <Route path='/actualites' element={<ActuScreen/>}/> */}
            <Route path='/contact' element={<ContactScreen/>}/>
            {/* <Route path='/article/:id' element={<ArticleScreen/>}/> */}
            <Route path='/organisation' element={<OrganisationScreen/>} />
            <Route path='/actions' element={<ActionScreen/>}/>
            <Route path='/communes' element={<FieldScreen/>}/>
            <Route path='/documents' element={<DocumentsScreen/>}/>
            <Route path='/appeldoffres' element={<AppelDoffreScreen/>} />
            <Route path='/confidentiality' element={<ConfidentialistyScreen/>} />
        </Routes>
        
    )
}
