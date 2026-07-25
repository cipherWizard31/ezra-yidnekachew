import About from './components/about/page';
import Contact from './components/contact/page';
import Footer from './components/footer/page';
import Hero from './components/Hero/page';
import Navbar from './components/Navbar/page';
import Portfolio from './components/portfolio/page';
import Process from './components/process/page';
import Services from './components/services/page';
import Showreel from './components/showreel/page';
import Testimonials from './components/testimonials/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showreel />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
