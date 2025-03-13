import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/global.css'
import Home from './pages/Home/Home'
import Ministerios from './pages/Ministerios/Ministerios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>

     <BrowserRouter>
     <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/ministerios" element={<Ministerios />} />
       </Routes>
       <Footer />
     </BrowserRouter>

 
      
    </>
  )
}

export default App
