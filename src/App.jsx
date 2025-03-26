import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/global.css'
import Home from './pages/Home/Home'
import Ministerios from './pages/Ministerios/Ministerios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Iglesia from './pages/Iglesia/Iglesia'
import Proyectos from './pages/Proyectos/Proyectos'
import Contacto from './pages/Contacto/Contacto'

function App() {
 

  return (
    <>

     <BrowserRouter>
     <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/ministerios" element={<Ministerios />} />
         <Route path="/iglesia" element={<Iglesia />} />
         <Route path="/proyectos" element={<Proyectos />} />
         <Route path="/contacto" element={<Contacto />} />
       </Routes>
       <Footer />
     </BrowserRouter>

 
      
    </>
  )
}

export default App
