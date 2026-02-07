import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollDirection, isAtTop } = useScrollDirection();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Determine if navbar should be hidden
  const shouldHide = scrollDirection === 'down' && !isAtTop && !isOpen;

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-transform duration-300 ${
        shouldHide ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
              Siilts<span className="text-brand-500">.</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive(link.path)
                        ? 'text-brand-600 dark:text-brand-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <button onClick={toggleTheme} className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Alternar tema">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/contato" className="inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-brand-500 dark:hover:bg-brand-400 transition-all shadow-lg hover:shadow-brand-500/20 active:scale-95 cursor-pointer">
              Orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${isActive(link.path) ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-4 py-4 bg-slate-900 dark:bg-brand-600 text-white font-bold rounded-xl shadow-lg">
                Pedir Orçamento
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
};

export default Navbar;