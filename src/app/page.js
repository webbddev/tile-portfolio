import {
  About,
  Contact,
  Hero,
  Marquee,
  Navbar,
  Projects,
  Work,
  Copyright,
  Experience,
} from '../components';

const App = () => {
  return (
    <div className=' text-white overflow-hidden'>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Work />
      <Experience/>
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
