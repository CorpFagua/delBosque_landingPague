import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Products } from './sections/Products';
import { ImageBreak } from './sections/ImageBreak';
import { Process } from './sections/Process_distribuidor';
import { Sectors } from './sections/Sectors';
import { CorporateDeals } from './sections/CorporateDeals';
//import { Testimonials } from './sections/Testimonials';
import { Certifications } from './sections/Certifications';
import { FAQ } from './sections/FAQ';
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
      <Products />
      <ImageBreak />
      <Process />
      <Sectors />
      <CorporateDeals />
      {/* <Testimonials /> */}
      <Certifications />
      <FAQ />
      <ContactForm />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
