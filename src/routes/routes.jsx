import {Route, Routes} from 'react-router-dom';
import { HomeScreen } from '../screens/homeScreen/homeScreen';
import { ContactScreen } from '../screens/contactscreen/contactScreen';
import { OrganisationScreen } from '../screens/organisationScreen/organisationScreen';
import { ActionScreen } from '../screens/actionScreen/actionScreen';
import { FieldScreen } from '../screens/fieldScreen/fieldScreen';
import { DocumentsScreen } from '../screens/documentsScreen/DocumentsScreen';
import { AppelDoffreScreen } from '../screens/appelDoffreScreen/AppelDoffreScreen.jsx';
import { ConfidentialistyScreen } from '../screens/confidentialityScreen/ConfidentialityScreen.jsx';


export const RoutesContainer = () =>{
    return (
        <Routes>
        {/* <Route path={'/admin/homepanel'} element={ 
            // <PrivateRoutes role={'logged'}>
            <HomePanelScreen/>}
            // </PrivateRoutes>}
            />
              <Route path={'/admin/panel/create'} element={ 
            // <PrivateRoutes role={'logged'}>
            <CreateArticleScreen/>}
            // </PrivateRoutes>}
            />
              <Route path={'/admin/panel/list'} element={ 
            // <PrivateRoutes role={'logged'}>
            <ListeArticleScreen/>}
            // </PrivateRoutes>}
            />
              <Route path={'/admin/update'} element={ 
            // <PrivateRoutes role={'logged'}>
            <UpdateArticleScreen/>}
            // </PrivateRoutes>}
            /> */}

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
            {/* <Route path='/admin/login' element={<LoginScreen/>}/> */}
        </Routes>
        
    )
}
