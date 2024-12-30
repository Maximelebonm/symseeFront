import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/header'
import { RoutesContainer } from './routes/routes'
import MemoFooterFish from './components/SvgComponent/footerFish/footerFish'

function App() {

  return (
    <div className='app-container'>
    <BrowserRouter>
        <Header/>
        <main className="content">
          <RoutesContainer/>
          {/* <img src={feuillebasGauche}/> */}
        </main>
    </BrowserRouter>
    <MemoFooterFish id="footer"/>
    </div>
  )
}

export default App
