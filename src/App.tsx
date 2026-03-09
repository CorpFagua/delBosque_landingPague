import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Process } from './sections/Process';
import { Certifications } from './sections/Certifications';
import { Testimonials } from './sections/Testimonials';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <Certifications />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
