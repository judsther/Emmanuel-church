import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/global.css'
import Home from './pages/Home/Home'
import Ministerios from './pages/Ministerios/Ministerios'

function App() {
 

  return (
    <>

     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/ministerios" element={<Ministerios />} />
       </Routes>
     </BrowserRouter>

 
      
    </>
  )
}

export default App
