import {BrowserRouter, Route, Routes} from 'react-router-dom'

import PortScanner from './components/PortScanner'
import Home from './components/Home'
import Header from './components/Header'


import './App.css'

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/scan" element={<PortScanner/>} />

    </Routes>
  </BrowserRouter>
)

export default App