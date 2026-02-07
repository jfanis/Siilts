
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/5519993337050";
const WHATSAPP_DISPLAY = "(19) 99333-7050";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form submitted');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-300"
    >
      <div className="bg-brand-950 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Vamos criar algo incrível?</h1>
          <p className="text-lg text-slate-300">Preencha o formulário ou nos chame no WhatsApp. Respondemos rápido.</p>
        </div>
      </div>

      <div className="flex-grow bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-slate-900/50 overflow-hidden border border-slate-100 dark:border-slate-800">
          
          {/* Contact Info */}
          <div className="bg-brand-600 dark:bg-brand-800 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <p className="mb-8 text-brand-100">
                Se preferir, fale direto com a gente via WhatsApp. Estamos prontos para tirar seu projeto do papel.
              </p>
              
              <div className="space-y-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="bg-brand-700 dark:bg-brand-900 p-3 rounded-full group-hover:bg-brand-500 transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">WhatsApp</p>
                    <p className="font-medium group-hover:text-white transition-colors">{WHATSAPP_DISPLAY}</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-700 dark:bg-brand-900 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">E-mail</p>
                    <p className="font-medium">contato@siilts.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="h-1 w-20 bg-brand-400 rounded mb-6"></div>
              <p className="text-brand-100 italic">"A Siilts cuida disso por você — do design à entrega final."</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-10">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-600 dark:text-slate-400">Entraremos em contato em breve.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border focus:bg-white dark:focus:bg-slate-700 focus:border-brand-500 focus:ring-brand-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border focus:bg-white dark:focus:bg-slate-700 focus:border-brand-500 focus:ring-brand-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border focus:bg-white dark:focus:bg-slate-700 focus:border-brand-500 focus:ring-brand-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Tipo de Projeto</label>
                  <select
                    id="projectType"
                    className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border focus:bg-white dark:focus:bg-slate-700 focus:border-brand-500 focus:ring-brand-500 transition-colors"
                  >
                    <option>Site Profissional</option>
                    <option>Landing Page</option>
                    <option>Portfólio / Vitrine</option>
                    <option>Ajuda com Hospedagem/Domínio</option>
                    <option>Manutenção</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border focus:bg-white dark:focus:bg-slate-700 focus:border-brand-500 focus:ring-brand-500 transition-colors"
                    placeholder="Conte um pouco sobre seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              </form>
            )}
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-500 mb-4">Ou se preferir algo imediato:</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
