
import Banner from "./components/Banner";
import TextoBanner from "./components/TextoBanner";
import Secciones from "./components/Secciones";
import Clinica from "./components/Clinica";
import Headline from "./components/Headline";



export default function Home() {
  return (
    <>
<div className="">
  
      <TextoBanner />
      <Banner />
      <Headline />
      <Secciones />
      <Clinica />
  
     </div>
    </>
  );
}
