import { BrowserRouter } from 'react-router-dom'
import './App.css'
import feuillebasGauche from './assets/background/feuilleBasgauche.png'

import { Header } from './components/header/header'
import { RoutesContainer } from './routes/routes'

function App() {

  return (
    <>
    <BrowserRouter>
        <Header/>
        <main>
          <RoutesContainer/>
          <img src={feuillebasGauche}/>
        </main>
    </BrowserRouter>
    </>
  )
}

export default App
