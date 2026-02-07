import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 dark:bg-black text-white pt-16 pb-8 border-t border-brand-900 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold tracking-tighter mb-4">
              Siilts<span className="text-brand-500">.</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Criamos sites bonitos, rápidos e funcionais. Ajudamos você desde a compra do domínio até a hospedagem segura.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Portfólio</Link></li>
              <li><Link to="/servicos" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Serviços</Link></li>
              <li><Link to="/sobre" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Sobre</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Por que Siilts?</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
              Transparência total, suporte humano e foco exclusivo em resultados reais para seu negócio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="Linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contato@siilts.com" className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="E-mail">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <Link 
              to="/contato" 
              className="inline-block px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Fale Conosco
            </Link>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Siilts. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacidade" className="hover:text-slate-300 cursor-pointer transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-slate-300 cursor-pointer transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;