import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/header'
import { RoutesContainer } from './routes/routes'
import { Footer } from './components/footer/Footer'
import { AuthProvider } from './screens/authContext'
import { ScrollToTop } from './helpers/scrollTotop'

function App() {

  return (
    <div className='app-container'>
    <BrowserRouter 
    future={{
    v7_startTransition: true,
    }}
    >
      <ScrollToTop/>
      <AuthProvider>
          <Header/>
          <main className="content">
            <RoutesContainer/>
          </main>
        <Footer id="footer"/>
      </AuthProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
