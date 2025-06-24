import React from 'react';

const FinalSection: React.FC = () => {
  // Configuração do WhatsApp (centralizada)
  const whatsappNumber = '5511999999999'; // Substitua pelo seu número
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre o Chefia.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="final-section">
      <div className="final-content">
        {/* Cabeçalho */}
        <div className="header-group">
          <h1 className="main-title">Chefia</h1>
          <p className="main-subtitle">Criação de fichas técnicas e controle de cmv na sua mão</p>
        </div>

        {/* Divisor */}
        <div className="divider-line"></div>

        {/* Seção de dúvidas - Agora com link para WhatsApp */}
        <div className="support-group">
          <h2 className="support-title">DÚVIDAS</h2>
          <div className="support-text">
            <p>Ainda tem dúvidas?</p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="support-link"
            >
              Fale com a gente
            </a>
          </div>
          <p className="support-description">
            Nosso time de suporte está 24h por dia, 7 dias por semana.<br />
            Entre em contato e nossa equipe irá te ajudar com tudo o que você precisar!
          </p>
        </div>

        {/* Divisor */}
        <div className="divider-line"></div>

        {/* Botões CTA */}
        <div className="cta-container">
          <div className="cta-buttons">
            <a href="#contato" className="cta-button">
              Acesse agora
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-button"
              aria-label="Fale conosco no WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;