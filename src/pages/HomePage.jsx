import Hero from '../components/sections/Hero.jsx';
import Services from '../components/sections/Services.jsx';
import TechStackSection from '../components/sections/TechStackSection.jsx';
import AboutUsSection from '../components/sections/AboutUsSection.jsx';
import ProcessSection from '../components/sections/ProcessSection.jsx';
import Portfolio from '../components/sections/Portfolio.jsx';
import MidPageCTA from '../components/sections/MidPageCTA.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';

const HomePage = ({ onNavigate }) => (
  <main>
    <Hero />
    <Services onNavigate={onNavigate} />
    <TechStackSection />
    <AboutUsSection />
    <ProcessSection />
    <Portfolio />
    <MidPageCTA onNavigate={onNavigate} />
    <Testimonials />
  </main>
);

export default HomePage;
