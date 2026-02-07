
import React from 'react';
import { Target, Heart, Lightbulb, Coffee, Code2, Rocket, History, User, Quote, ShieldCheck, Lock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/5519993337050";

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300"
    >
      {/* WhatsApp Floating Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Header */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white dark:bg-slate-900 py-24 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-brand-50/50 dark:bg-brand-900/10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            A Siilts
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Mais do que código. Somos parceiros do seu crescimento digital.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Origin Story Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="prose prose-lg prose-slate dark:prose-invert mx-auto text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start mb-4 text-brand-600 dark:text-brand-400">
                <History className="w-8 h-8 mr-3" />
                <span className="font-bold tracking-wider uppercase text-sm">Nossa História</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 mt-0">
                De um sonho jovem à realidade digital
              </h2>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                A Siilts não começou em um grande escritório corporativo. Ela nasceu da vontade genuína de empreender de um jovem visionário: <strong>João Fanis</strong>.
              </p>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Observando o mercado, João percebeu que muitos negócios tinham sites lentos, inseguros ou visualmente ultrapassados. Ele queria criar algo próprio, que não apenas pagasse as contas, mas que gerasse valor real para outros empreendedores.
              </p>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Com foco, estudo e dedicação, a Siilts foi fundada para preencher essa lacuna: oferecer tecnologia de ponta, segurança SSL e design premium de forma acessível e descomplicada.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-brand-100 to-white dark:from-brand-900/40 dark:to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 relative">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-200 dark:text-brand-800 opacity-50" />
                <p className="italic text-lg text-slate-700 dark:text-slate-300 relative z-10 pt-8 mb-6">
                  "Eu queria provar que era possível entregar excelência técnica sem burocracia. Ver o negócio de um cliente crescer por causa de um site que fizemos é o que me move todos os dias."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JF
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base m-0">João Fanis</h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Fundador da Siilts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Security Section */}
        <motion.section 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           className="bg-brand-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Lock className="w-64 h-64" />
          </div>
          <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
            <div className="bg-brand-800 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-brand-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Segurança em Primeiro Lugar</h3>
              <p className="text-brand-100 max-w-2xl">
                Sabemos que a internet pode ser perigosa. Por isso, <strong>100% dos nossos sites</strong> são entregues com Certificado SSL (o cadeado verde), proteção contra ataques básicos e hospedagem monitorada. Seu negócio e os dados dos seus clientes ficam protegidos.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border-l-4 border-brand-500 dark:border-brand-400"
          >
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-brand-600 dark:text-brand-400 mr-2" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">O que nos move</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Transformar a internet num lugar com sites mais bonitos, funcionais e rápidos. 
              Ajudar empresas a se posicionarem com autoridade no mercado digital.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border-l-4 border-emerald-500 dark:border-emerald-400"
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Nossa essência</h3>
            </div>

            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>• Simplicidade radical</li>
              <li>• Performance obsessiva</li>
              <li>• Design que vende</li>
              <li>• Transparência total</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Como trabalhamos</h2>
           <div className="space-y-6">
             {[
               { icon: <Coffee />, title: "1. Briefing & Ideia", desc: "Uma conversa relaxada para entender onde você quer chegar." },
               { icon: <Code2 />, title: "2. Desenvolvimento", desc: "Mão na massa: criamos o layout e programamos com segurança e velocidade." },
               { icon: <Rocket />, title: "3. Entrega & Suporte", desc: "Configuramos seu domínio, SSL e te ensinamos a usar." }
             ].map((step, idx) => (
               <motion.div 
                 key={idx} 
                 variants={fadeInUp}
                 className="flex items-start md:items-center bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
               >
                 <div className="bg-brand-100 dark:bg-brand-900 p-3 rounded-full mr-4 text-brand-600 dark:text-brand-300 shadow-sm">
                   {step.icon}
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{step.desc}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </motion.section>

        {/* Final CTA Button for About page */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-5 bg-brand-600 hover:bg-brand-700 text-white font-black rounded-xl transition-all shadow-xl transform hover:scale-105">
            Falar com o João no WhatsApp
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
