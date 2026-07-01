import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Story from './sections/Story';
import Numbers from './sections/Numbers';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import WorkDetail from './pages/WorkDetail';
import Preloader from './components/Preloader';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Story />
        <Numbers />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {!preloaderDone && <Preloader onDone={() => setPreloaderDone(true)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </>
  );
}
