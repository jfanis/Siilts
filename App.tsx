import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTitleUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'Siilts — Sites Profissionais',
      '/portfolio': 'Nosso Portfólio | Projetos de Sucesso | Siilts',
      '/servicos': 'Serviços de Desenvolvimento Web | Siilts',
      '/sobre': 'Sobre a Siilts | Nossa História',
      '/contato': 'Fale Conosco | Siilts',
      '/privacidade': 'Política de Privacidade | Siilts',
      '/termos': 'Termos de Uso | Siilts',
    };
    const title = titles[location.pathname] || 'Siilts — Soluções Digitais';
    document.title = title;
  }, [location]);
  return null;
};

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <HashRouter>
      <ScrollToTop />
      <PageTitleUpdater />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main id="main-content" className="flex-grow pt-16 focus:outline-none" tabIndex={-1}>
          <AppRoutes />
        </main>
        <Footer />
      </div>


    </HashRouter>
  );
};

export default App;