
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Database, Settings, Star, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceFlipCard, { ServiceData } from '../components/ServiceFlipCard';
import WhatsAppButton from '../components/WhatsAppButton';

const WHATSAPP_NUMBER = "5519993337050";

const Home: React.FC = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  
  const services: ServiceData[] = [
    { 
      icon: <Rocket className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      imageAlt: "Site de vendas moderno",
      title: 'Site Vendas Express',
      price: '1.000',
      desc: 'Leve seu negócio para o mundo digital com velocidade e design profissional.',
      details: { what: "Um site institucional ou landing page otimizada para capturar leads no WhatsApp.", why: "Quem não é visto não é lembrado. Comece a atrair clientes qualificados agora." }
    },
    { 
      icon: <Database className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      imageAlt: "Dashboard de sistema web",
      title: 'Site Inteligente',
      price: '2.500',
      desc: 'Sistemas com banco de dados para gerenciar sua empresa com inteligência.',
      details: { what: "Desenvolvimento robusto com área administrativa para você ter controle total do conteúdo.", why: "Automatize processos e organize suas informações para escalar sua operação." }
    },
    { 
      icon: <Settings className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      imageAlt: "Código de programação complexo",
      title: 'Projetos de Elite',
      price: 'A Combinar',
      desc: 'Sistemas complexos desenhados sob medida para sua visão única de mercado.',
      details: { what: "Arquitetura de software personalizada, integração de APIs e alta performance.", why: "Sua ideia exclusiva merece uma tecnologia que suporte o seu sucesso sem limites." }
    },
    { 
      icon: <ShieldCheck className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80",
      imageAlt: "Servidores seguros",
      title: 'Manutenção & Paz',
      price: '50/mês',
      desc: 'Site sempre online, seguro e com backup diário automático.',
      details: { what: "Monitoramento 24h, certificado SSL e suporte técnico especializado.", why: "Evite prejuízos com site fora do ar ou ataques. Sua paz de espírito custa pouco." }
    },
  ];

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Advogado Tributarista",
      text: "A Siilts entregou meu site em tempo recorde. O design passou exatamente a autoridade que eu precisava.",
      avatar: "RM"
    },
    {
      name: "Ana Paula Silva",
      role: "CEO da Bella Fashion",
      text: "Nossa landing page começou a converter 30% mais leads logo na primeira semana. Incrível!",
      avatar: "AP"
    },
    {
      name: "Carlos Eduardo",
      role: "Consultor de TI",
      text: "Profissionalismo raro. A preocupação com a segurança e a velocidade foi o diferencial.",
      avatar: "CE"
    }
  ];

  return (
    <div className="flex flex-col">
      <WhatsAppButton phoneNumber={WHATSAPP_NUMBER} message="Olá! Gostaria de saber mais sobre a criação de sites profissionais." />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60"></div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
            Não é só um site.<br className="hidden md:block" />
            <span className="text-brand-500 font-black">É o motor do seu lucro.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
            Criamos experiências digitais que convertem visitantes em dinheiro no seu bolso. Design premium por um preço que cabe no seu planejamento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg transform hover:scale-105">
              Quero meu site agora <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-10 py-5 border border-slate-600 hover:bg-slate-800 text-white font-bold rounded-xl transition-all">
              Ver Cases de Sucesso
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <p className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-3">Transparência & Valor</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">O melhor custo-benefício do mercado</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceFlipCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Quem confiou, cresceu.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative transition-all"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-100 dark:text-brand-800 opacity-50" />
                <div className="flex text-brand-500 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic text-sm md:text-base leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-900 dark:bg-black text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sua empresa merece ser Elite.</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Por apenas R$ 1.000 você tem um site completo pronto para vender. Qual é a sua desculpa agora?
          </p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-white text-brand-950 font-black rounded-lg hover:bg-slate-100 transition-all shadow-2xl transform hover:scale-110">
            Falar com um Especialista
          </a>
        </motion.div>
      </section>
    </div>
  );
};


export default Home;

