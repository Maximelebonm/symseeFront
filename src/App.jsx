import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/header'
import { RoutesContainer } from './routes/routes'
import { Footer } from './components/footer/Footer'
import { AuthProvider } from './screens/authContext'

function App() {

  return (
    <div className='app-container'>
    <BrowserRouter>
     <AuthProvider>
            <Header/>
            <main className="content">
              <RoutesContainer/>
              {/* <img src={feuillebasGauche}/> */}
            </main>
        <Footer id="footer"/>
       </AuthProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
