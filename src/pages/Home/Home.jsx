
import Navbar from "../../components/Navbar";
import Banner from "./components/Banner";
import TextoBanner from "./components/TextoBanner";
import Secciones from "./components/Secciones";
import Carrousel from "./components/Carrousel";
import Footer from "../../components/Footer";
import Clinica from "./components/Clinica";


export default function Home() {
  return (
    <>

      <Navbar />
      <TextoBanner />
      <Banner />
      <Secciones />
      <Clinica />
      <Carrousel />
     <Footer />
    </>
  );
}
