import {
  About,
  Contact,
  Hero,
  Marquee,
  Navbar,
  Projects,
  Work,
  Copyright,
} from '../components';

const App = () => {
  return (
    <div className='font-light text-white antialiased selection:bg-lime-300 selection:text-black'>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Work />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
