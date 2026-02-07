import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Advocacia Silva & Associados",
      category: "Institucional",
      description: "Site minimalista e sóbrio para escritório de advocacia. Foco total em transmitir autoridade e facilitar o contato via WhatsApp.",
      result: "+38% mais contatos qualificados.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp",
      alt: "Notebook sobre mesa de madeira exibindo o site do escritório de advocacia com design sóbrio em preto e branco.",
      tags: ["React", "Institucional", "SEO Local"]
    },
    {
      id: 2,
      title: "Curso: Mestre das Vendas",
      category: "Landing Page",
      description: "Página de alta conversão (High-stakes) para lançamento de infoproduto. Design agressivo focado em copy e quebra de objeções.",
      result: "ROI de 500% no lançamento.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp",
      alt: "Tela de computador mostrando landing page colorida com gráficos de crescimento e botões de chamada para ação em destaque.",
      tags: ["Copywriting", "Launch", "Hotmart"]
    },
    {
      id: 3,
      title: "Studio Bella Arquitetura",
      category: "Portfólio",
      description: "Galeria imersiva para escritório de arquitetura. Fundo escuro para ressaltar as fotos dos projetos e navegação fluida.",
      result: "Aumento no tempo de permanência no site.",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp",
      alt: "Site de arquitetura em tela cheia mostrando uma sala de estar moderna e luxuosa.",
      tags: ["Design", "Galeria", "UX Premium"]
    },
    {
      id: 4,
      title: "Dr. Marcelo Odontologia",
      category: "Local Business",
      description: "Site para clínica odontológica com agendamento online integrado e apresentação da equipe clínica.",
      result: "Agenda lotada na primeira semana.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp",
      alt: "Página inicial de site odontológico clean, com foto de dentista sorrindo e formulário de agendamento visível.",
      tags: ["Agendamento", "Local", "Saúde"]
    },
    {
      id: 5,
      title: "TechStart SaaS",
      category: "Startup",
      description: "Site institucional para startup de tecnologia, explicando o software de forma simples com ilustrações customizadas.",
      result: "Redução no Custo por Lead (CPL).",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp",
      alt: "Layout moderno de site para startup com dashboards, gráficos de dados e ícones tecnológicos.",
      tags: ["SaaS", "Moderno", "Animações"]
    },
    {
      id: 6,
      title: "Restaurante La Piazza",
      category: "Gastronomia",
      description: "Cardápio digital e site institucional. Fotos de dar água na boca e botão de pedido direto no WhatsApp.",
      result: "30 pedidos diretos por dia.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp",
      alt: "Site de restaurante italiano exibindo pratos gourmet de massas e botão flutuante para pedir online.",
      tags: ["Delivery", "Food", "Mobile First"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300"
    >
       <motion.div 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="bg-slate-900 py-20 text-white"
       >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Projetos que mostram nosso padrão</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Resultados reais para clientes que confiam na nossa metodologia.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          role="list"
        >
          {projects.map((project) => (
            <motion.div 
              variants={itemVariants}
              key={project.id} 
              className="group bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-brand-900/20 transition-all duration-300 flex flex-col h-full"
              role="listitem"
            >
              <div className="relative overflow-hidden h-64 bg-slate-200 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300" aria-hidden="true" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-auto">
                  <div className="mb-4">
                    <span className="block text-sm font-semibold text-slate-500 dark:text-slate-500">Resultado:</span>
                    <span className="text-brand-700 dark:text-brand-300 font-bold">{project.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portfolio;