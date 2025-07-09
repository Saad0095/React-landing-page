import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-background text-white">
      <Navbar/>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
