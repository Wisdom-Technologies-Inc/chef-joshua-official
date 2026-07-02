import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
    </>
  );
}