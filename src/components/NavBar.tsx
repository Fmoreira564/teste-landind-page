import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'modulos', label: 'Módulos' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Fale conosco' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="main-nav">
      {/* Botão Mobile */}
      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Links + Botão Cadastre-se */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.id);
            }}
            className="nav-link"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#cadastro" 
          className="nav-button"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('cadastro');
          }}
        >
          Cadastre-se
        </a>
      </div>
    </nav>
  );
};

export default NavBar;