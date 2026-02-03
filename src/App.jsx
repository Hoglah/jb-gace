import About from "./sections/about/About";
import Choose from "./sections/Choose/Choose";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Choose />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
