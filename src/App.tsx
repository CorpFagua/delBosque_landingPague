import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Sectors } from './sections/Sectors';
import { CorporateDeals } from './sections/CorporateDeals';
import { Products } from './sections/Products';
import { Process } from './sections/Process';
import { Certifications } from './sections/Certifications';
import { ContactForm } from './sections/ContactForm';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Sectors />
      <CorporateDeals />
      <Products />
      <Process />
      <Certifications />
      <ContactForm />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
