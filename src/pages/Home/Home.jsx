
import Navbar from "../../components/Navbar";
import Banner from "./components/Banner";
import TextoBanner from "./components/TextoBanner";
import Secciones from "./components/Secciones";
import Footer from "../../components/Footer";
import Clinica from "./components/Clinica";
import Headline from "./components/Headline";



export default function Home() {
  return (
    <>
<div className="">
      <Navbar />
      <TextoBanner />
      <Banner />
      <Headline />
      <Secciones />
      <Clinica />
     <Footer />
     </div>
    </>
  );
}
