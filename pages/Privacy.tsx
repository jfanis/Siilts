import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        <p>Última atualização: {new Date().getFullYear()}</p>
        
        <h2>1. Introdução</h2>
        <p>
          A Siilts respeita a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais ao visitar nosso site ou contratar nossos serviços.
        </p>

        <h2>2. Coleta de Dados</h2>
        <p>
          Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone através do nosso formulário de contato. Também podemos coletar dados técnicos de navegação (cookies) para melhorar a performance do site.
        </p>

        <h2>3. Uso das Informações</h2>
        <p>
          Utilizamos seus dados exclusivamente para:
        </p>
        <ul>
          <li>Responder aos seus pedidos de orçamento.</li>
          <li>Prestar os serviços de desenvolvimento web, hospedagem e suporte.</li>
          <li>Melhorar a experiência de usuário no nosso site.</li>
        </ul>

        <h2>4. Proteção de Dados</h2>
        <p>
          Adotamos medidas de segurança técnicas para proteger suas informações. Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.
        </p>

        <h2>5. Seus Direitos</h2>
        <p>
          Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais armazenados por nós a qualquer momento. Basta entrar em contato através do e-mail contato@siilts.com.
        </p>
      </div>
    </motion.div>
  );
};

export default Privacy;