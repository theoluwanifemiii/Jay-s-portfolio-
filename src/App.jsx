import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Story from './sections/Story';
import Numbers from './sections/Numbers';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import WorkDetail from './pages/WorkDetail';

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
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<WorkDetail />} />
    </Routes>
  );
}
