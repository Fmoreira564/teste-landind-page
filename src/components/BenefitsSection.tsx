import React from 'react';

interface BenefitItem {
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Controle absoluto do CMV",
      description: "Saiba exatamente quanto custa cada prato e como isso afeta sua margem de lucro."
    },
    {
      title: "Suporte de verdade!",
      description: "Conte com um time especializado disponível para te ajudar."
    },
    {
      title: "Fichas técnicas organizadas",
      description: "Padronize receitas e calcule custos automaticamente."
    },
    {
      title: "Resultados reais",
      description: "Reduza desperdícios e aumente sua lucratividade."
    }
  ];

   return (
    <section id="beneficios" className="benefits-section"> {/* ID modificado */}
      <div className="section-header">
        <h2>Vantagens Exclusivas</h2>
        <p>Descubra como o Chefia transforma a gestão do seu restaurante</p>
      </div>
      
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;