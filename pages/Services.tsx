
import React from 'react';
import { CircleCheck, Globe, Rocket, Database, Settings, ShieldAlert, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import FAQItem from '../components/FAQItem';
import WhatsAppButton from '../components/WhatsAppButton';

const WHATSAPP_NUMBER = "5519993337050";

const Services: React.FC = () => {
  const plans = [
    {
      title: "Site Vendas Express",
      icon: <Rocket className="w-8 h-8" />,
      price: "1.000",
      description: "Perfeito para quem quer começar a vender hoje. Um site leve, rápido e focado 100% em conversão.",
      features: ["Design Moderno", "Focado em WhatsApp", "Mobile First", "Entrega Rápida"],
      badge: "Início Imediato"
    },
    {
      title: "Ecossistema Inteligente",
      icon: <Database className="w-8 h-8" />,
      price: "2.500",
      description: "Um site com banco de dados para gerenciar clientes, produtos ou conteúdos. O motor que seu negócio precisa para crescer.",
      features: ["Painel Administrativo", "Banco de Dados Seguro", "Filtros Avançados", "Relatórios Simples"],
      badge: "Mais Procurado",
      popular: true
    },
    {
      title: "Solução Personalizada",
      icon: <Settings className="w-8 h-8" />,
      price: "A combinar",
      description: "Projetos robustos e complexos. Se você pode sonhar, nós podemos codificar com perfeição técnica.",
      features: ["Sistemas Sob Medida", "Integrações de API", "Segurança Militar", "Escalabilidade Total"],
      badge: "Exclusivo"
    }
  ];

  const maintenance = [
    { period: "Mensal", price: "50", saving: "" },
    { period: "12 Meses", price: "330", saving: "Economize R$ 270", highlight: true },
    { period: "24 Meses", price: "500", saving: "R$ 250 por ano - A melhor oferta!", gold: true },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300"
    >
      <WhatsAppButton phoneNumber={WHATSAPP_NUMBER} message="Olá! Gostaria de saber mais sobre os planos da Siilts." />

      {/* Header Motivacional */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-600/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
            Investimento com Retorno
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Seu Negócio merece <br/><span className="text-brand-400">Presença de Elite.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-3xl mx-auto">
            Não é apenas um site. É a ferramenta que vai trabalhar 24h por dia para trazer clientes qualificados para você. Escolha o seu próximo nível:
          </motion.p>
        </div>
      </section>

      {/* Grid de Planos de Criação */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white dark:bg-slate-900 border ${plan.popular ? 'border-brand-500 ring-4 ring-brand-500/10 scale-105 z-10' : 'border-slate-100 dark:border-slate-800'} shadow-xl flex flex-col h-full`}
            >
              {plan.badge && (
                <span className={`absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${plan.popular ? 'bg-brand-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                  {plan.badge}
                </span>
              )}
              <div className="text-brand-600 dark:text-brand-400 mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-sm text-slate-500">Investimento a partir de</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">R$ {plan.price}</span>
                  {plan.price !== "A combinar" && <span className="text-slate-500 ml-1">à vista</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                    <CircleCheck className="w-4 h-4 text-green-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200'}`}>
                Garantir meu site
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manutenção e Backup */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest text-xs">
                <ShieldAlert className="w-4 h-4 mr-2" /> Segurança Vital
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Dormir tranquilo não tem preço.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Um site sem manutenção é um site vulnerável. Nós cuidamos dos backups e das atualizações de segurança para que você foque apenas no que importa: <strong>Seu lucro.</strong>
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                   <Globe className="w-5 h-5 mr-2 text-brand-500" /> Domínio e Hospedagem
                 </h4>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                   Configuração completa do seu domínio e servidor por apenas <strong>R$ 100 reais</strong>. Deixamos tudo no ar, pronto para vender.
                 </p>
              </div>
            </div>

            <div className="w-full lg:w-[450px] space-y-4">
              {maintenance.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-default flex justify-between items-center ${m.gold ? 'bg-brand-900 border-brand-500 text-white shadow-xl' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'}`}
                >
                  <div>
                    <span className={`text-xs font-bold uppercase ${m.gold ? 'text-brand-300' : 'text-slate-500'}`}>{m.period}</span>
                    <h4 className={`text-2xl font-black ${m.gold ? 'text-white' : 'text-slate-900 dark:text-white'}`}>R$ {m.price}</h4>
                    {m.saving && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.gold ? 'bg-white text-brand-900' : 'bg-green-100 text-green-700'}`}>{m.saving}</span>}
                  </div>
                  <MessageCircle className={`w-8 h-8 ${m.gold ? 'text-brand-400' : 'text-slate-300'}`} />
                </div>
              ))}
              <p className="text-center text-xs text-slate-500 pt-4 italic">Backup diário e suporte via WhatsApp incluso em todos os planos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Simples */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Dúvidas Frequentes</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 px-8 py-4 shadow-sm">
            <FAQItem question="Preciso de um site mesmo se já tiver Instagram?" answer="Sim! O Instagram é um terreno alugado. O site é sua sede própria onde você controla 100% da experiência do cliente e aparece no Google quando alguém busca pelo seu serviço." />
            <FAQItem question="E se eu já tiver o domínio?" answer="Sem problemas! Nós fazemos toda a configuração técnica e apontamento para o novo servidor por apenas R$ 100. Você não precisa se preocupar com códigos." />
            <FAQItem question="Como funciona o pagamento?" answer="Trabalhamos com entrada facilitada e o restante na entrega do projeto. Aceitamos Pix e Cartão de Crédito." />
          </div>
        </div>
      </section>
    </motion.div>
  );
};


export default Services;
