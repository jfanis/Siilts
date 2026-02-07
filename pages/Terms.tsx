import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
        <p>Última atualização: {new Date().getFullYear()}</p>
        
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar o site da Siilts ou contratar nossos serviços, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
        </p>

        <h2>2. Serviços Oferecidos</h2>
        <p>
          A Siilts presta serviços de desenvolvimento de sites, landing pages, portfólios, e consultoria em hospedagem e domínios. Os detalhes específicos de cada projeto são definidos em contrato individual.
        </p>

        <h2>3. Propriedade Intelectual</h2>
        <p>
          Após o pagamento integral do projeto, a propriedade intelectual do código e design do site desenvolvido é transferida para o cliente, salvo softwares de terceiros ou bibliotecas open-source utilizadas.
        </p>

        <h2>4. Limitação de Responsabilidade</h2>
        <p>
          A Siilts não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou incapacidade de uso dos sites desenvolvidos, ou por interrupções causadas por serviços de hospedagem de terceiros, embora prestemos suporte para resolver tais questões.
        </p>

        <h2>5. Alterações</h2>
        <p>
          Podemos revisar estes termos de serviço a qualquer momento sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
        </p>
      </div>
    </motion.div>
  );
};

export default Terms;