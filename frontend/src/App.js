import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ConsultationProvider } from './context/ConsultationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ConsultationPopup from './components/ConsultationPopup';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import GetQuote from './pages/GetQuote';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import CostCalculator from './pages/CostCalculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ConsultationProvider>
          <Navbar />
          <Toaster position="top-right" richColors />
          <ConsultationPopup />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cost-calculator" element={<CostCalculator />} />
            {/* Catch-all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ConsultationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
