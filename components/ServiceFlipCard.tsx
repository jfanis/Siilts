import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceData {
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
  price: string;
  details: { what: string; why: string };
}

interface ServiceFlipCardProps {
  service: ServiceData;
  index: number;
}

const ServiceFlipCard: React.FC<ServiceFlipCardProps> = ({
  service,
  index,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[520px] w-full cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente do Card */}
        <div className="absolute inset-0 backface-hidden w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-brand-100 dark:border-slate-700 flex flex-col items-center p-6 gap-4 overflow-hidden">
          <div className="bg-brand-50 dark:bg-slate-700 p-3 rounded-full text-brand-600 dark:text-brand-400 mt-2">
            {service.icon}
          </div>
          <div className="w-full h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
            <img
              src={`${service.image}&fm=webp&q=80&w=600`}
              alt={service.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="text-center space-y-2 flex-grow flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
              {service.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.desc}
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                A partir de
              </span>
              <div className="text-2xl font-black text-brand-600 dark:text-brand-400">
                R$ {service.price}
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <button className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-all shadow-md">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Verso do Card */}
        <div
          className="absolute inset-0 backface-hidden w-full h-full bg-brand-900 dark:bg-slate-950 p-6 md:p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center border border-brand-700 dark:border-slate-800"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="space-y-6 text-left">
            <div>
              <div className="flex items-center text-brand-300 mb-2 text-xs font-bold uppercase tracking-widest">
                O que entregamos?
              </div>
              <p className="text-slate-100 text-sm leading-relaxed border-l-2 border-brand-500 pl-4">
                {service.details.what}
              </p>
            </div>
            <div>
              <div className="flex items-center text-brand-300 mb-2 text-xs font-bold uppercase tracking-widest">
                Por que investir?
              </div>
              <p className="text-slate-100 text-sm leading-relaxed border-l-2 border-brand-500 pl-4">
                {service.details.why}
              </p>
            </div>
          </div>
          <Link
            to="/servicos"
            className="mt-8 inline-block px-4 py-2 bg-white text-brand-900 rounded-lg text-sm font-bold text-center"
          >
            Ver todos os planos
          </Link>
          <button
            className="absolute bottom-6 right-6 p-2 text-brand-400 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceFlipCard;
