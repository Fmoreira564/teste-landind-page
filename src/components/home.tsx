import React from "react";
import NavBar from "./NavBar";
import homem from "../assets/homem.png";
import logo from "../assets/logo.png";
import BenefitsSection from "./BenefitsSection";
import SystemCapabilities from "./systemcapabilities";
import UniqueModule from "./UniqueModule";
import DividerSection from './DividerSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQsection';
import FinalSection from "./FinalSection";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

        <div className="content-wrapper" id="home"></div>
      
      <div className="content-wrapper">
        {/* Header Section */}
        <header className="header-container">
          <img src={logo} alt="Logo Chefia" className="logo" />
          <h1 className="brand-title">Chefia</h1>
        </header>

        {/* Hero Section */}
        <section className="hero-section" aria-labelledby="main-heading">
          <div className="hero-container">
            <div className="hero-text">
              <h1 id="main-heading">Gestão de restaurante com quem entende</h1>
              <h2>Automatize fichas técnicas e domine seus custos.</h2>
              <p>
                CHEFIA é a plataforma ideal para donos, gerentes e chefs que querem
                organizar receitas, padronizar processos e dominar os custos. Tudo isso
                com uma interface simples, eficiente e pensada para o dia a dia da cozinha.
              </p>
              <button className="hero-button">Acesse agora →</button>
            </div>

            <div className="hero-image-container">
              <img 
                src={homem} 
                alt="Homem usando o aplicativo Chefia" 
                className="hero-image" 
                loading="lazy"
              />
            </div>
          </div>
        </section>

      <DividerSection/>
        

        {/* Benefits Section */}
        <BenefitsSection />

        {/* System Capabilities */}
       <SystemCapabilities />

        {/* Unique Module Section */}
    
        <UniqueModule />

        <PricingSection/>

        <FAQSection/>

        <FinalSection/>

        {/* Final CTA */}
       
      </div>
    </>
  );
};

export default Home;