import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Numbers from './sections/Numbers';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import WorkDetail from './pages/WorkDetail';
import WorkList from './pages/WorkList';
import Questionnaire from './pages/Questionnaire';
import Preloader from './components/Preloader';

function Home({ animate }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero animate={animate} />
      </main>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'clamp(60px, 10vw, 100px)' }}>
        <Story />
        <Numbers />
        <Testimonials />
      </main>
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'clamp(60px, 10vw, 100px)' }}>
        <Experience />
      </main>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
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
        <Route path="/" element={<Home animate={preloaderDone} />} />
        <Route path="/work" element={<WorkList />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/client" element={<Questionnaire />} />
      </Routes>
    </>
  );
}
