import {Route, Routes} from 'react-router-dom';
// import { PrivateRoutes } from './privatesRoutes';
import { HomeScreen } from '../screens/homeScreen/homeScreen';
import { ContactScreen } from '../screens/contactscreen/contactScreen';
import { AboutUsScreen } from '../screens/aboutUsScreen/aboutUsScreen';
import { ActuScreen } from '../screens/actuScreen/actuScreen';
import { ArticleScreen } from '../screens/articleScreen/articleScreen';
// import {LoginScreen} from '../screens/loginScreen/loginScreen'
// import { HomePanelScreen } from '../screens/panelScreens/homePanelScreen/homePanelScreen';
// import { CreateArticleScreen } from '../screens/panelScreens/createArticleScreen/createArticleScreen';
// import { ListeArticleScreen } from '../screens/panelScreens/listArcticleScreen/listeArticleScreen';
// import { UpdateArticleScreen } from '../screens/panelScreens/updateArticleScreen/updateArticleScreen';
import { OrganisationScreen } from '../screens/organisationScreen/organisationScreen';
import { GemapiScreen } from '../screens/gemapiScreen/gemapiScreen';

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
            <Route path='/about' element={<AboutUsScreen/>}/>
            {/* <Route path='/actualites' element={<ActuScreen/>}/> */}
            <Route path='/contact' element={<ContactScreen/>}/>
            {/* <Route path='/article/:id' element={<ArticleScreen/>}/> */}
            <Route path='/organisation' element={<OrganisationScreen/>} />
            <Route path='/gemapi' element={<GemapiScreen/>}/>
            {/* <Route path='/admin/login' element={<LoginScreen/>}/> */}
        </Routes>
        
    )
}
