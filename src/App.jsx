import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'

import FT from './pages/FazTudo'
import Stategy from './pages/Strategy'
import Observer from './pages/Observer'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={}/>
        <Route path='/Strategy' element={}/>
        <Route path='/Observer' element={}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
