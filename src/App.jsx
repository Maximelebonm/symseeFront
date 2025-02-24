import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/header'
import { RoutesContainer } from './routes/routes'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <div className='app-container'>
    <BrowserRouter>
        <Header/>
        <main className="content">
          <RoutesContainer/>
          {/* <img src={feuillebasGauche}/> */}
        </main>
    <Footer id="footer"/>
    </BrowserRouter>
    </div>
  )
}

export default App
