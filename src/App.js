
import './App.css';
import Navbar from "./Navbar/navbar";
import SectionHero from "./Section/sectionHero";
import SectionAbout from "./Section/sectionAbout";
import SectionService from "./Section/sectionService";
import SectionAbout2 from "./Section/sectionAbout2";
import SectionDoctor from "./Section/sectionDoctor";
import SectionSafety from "./Section/sectionSafety";
import SectionBlog from "./Section/sectionBlog";
import Footer from "./Navbar/Footer";

function App() {
  return (
    <div >

        <Navbar />
        <SectionHero />
        <SectionAbout />
        <SectionService />
        <SectionAbout2 />
       < SectionDoctor />
        <SectionSafety />
        <SectionBlog />
        <Footer />

    </div>
  );
}

export default App;
