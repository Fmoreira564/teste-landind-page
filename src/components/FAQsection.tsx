import React, { useState } from 'react';
import anchorIcon from '../assets/icons/anchor-icon.svg';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "O que é o CHEFIA?",
      answer: "O CHEFIA é uma plataforma completa de gestão para restaurantes, desenvolvida para ajudar donos, gerentes e chefs a organizarem receitas, controlarem custos e aumentarem a lucratividade do seu negócio."
    },
    {
      question: "Para quem o CHEFIA é indicado?",
      answer: "Nosso sistema é perfeito para estabelecimentos de todos os portes, desde pequenos bistrôs até grandes redes de restaurantes."
    },
    {
      question: "Preciso instalar algum programa?",
      answer: "Não, o CHEFIA é 100% baseado na web e não requer instalação. Acesse de qualquer dispositivo com internet."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Sim, oferecemos um período de teste gratuito de 14 dias para você conhecer todas as funcionalidades."
    },
    {
      question: "O CHEFIA ajuda a reduzir custos?",
      answer: "Sim, com o controle preciso do CMV e identificação de desperdícios, nossos clientes reduzem custos em média 20% no primeiro trimestre."
    },
    {
      question: "Posso cadastrar múltiplos usuários?",
      answer: "Sim, você pode adicionar quantos usuários precisar, com diferentes níveis de acesso."
    },
    {
      question: "O CHEFIA funciona para franquias ou múltiplas unidades?",
      answer: "Sim, temos planos específicos para redes com relatórios consolidados e gestão centralizada."
    },
    {
      question: "Tenho suporte se tiver dúvidas?",
      answer: "Oferecemos suporte especializado por chat, e-mail e telefone durante horário comercial."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Perguntas Frequentes</p>

        <div className="faq-accordion">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="accordion-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              

              
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;