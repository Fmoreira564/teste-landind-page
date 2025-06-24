import React from 'react';

const PricingSection = () => {
  return (
    <section id="planos" className="pricing-section">
      <div className="pricing-container">
        <h2 className="section-title">Planos e valores</h2>
        <p className="section-subtitle">
          Escolha o plano ideal para comandar<br />
          seu restaurante com controle, lucro e simplicidade
        </p>

        <div className="plans-container">
          {/* Plano Mensal */}
          <div className="plan-card">
            <h3 className="plan-title">Plano mensal</h3>
            <div className="plan-price">R$ 59,90</div>
            <button className="plan-button">Contratar agora →</button>
          </div>

          {/* Plano Anual */}
          <div className="plan-card highlighted">
            <div className="plan-badge">Economize 18%</div>
            <h3 className="plan-title">Plano Anual</h3>
            <div className="plan-price">R$ 590,00</div>
            <button className="plan-button">Contratar agora →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;