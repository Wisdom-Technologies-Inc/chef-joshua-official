import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import ProfessionalTitles from "./components/ProfessionalTitles";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Mission from "./components/Mission";
import Philosophy from "./components/Philosophy";
import Journey from "./components/Journey";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <ProfessionalTitles />
      <Services />
      <Skills />
      <Mission />
      <Philosophy />
      <Journey />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}