import React from 'react';
// Corrigindo os imports com os nomes reais dos seus arquivos
import { ReactComponent as CreateIcon } from '../assets/icons/creat-icon.svg';
import { ReactComponent as ControlIcon } from '../assets/icons/control-icon.svg';
import { ReactComponent as ReportIcon } from '../assets/icons/report-icon.svg';
import { ReactComponent as UpdateIcon } from '../assets/icons/uptade-icon.svg';

interface CapabilityItem {
  id: number;
  icon: React.ReactNode;
  title: string;
}

const SystemCapabilities: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      id: 1,
      icon: <CreateIcon className="capability-icon" />,
      title: 'Criar e padronizar todas as fichas técnicas do seu cardápio',
    },
    {
      id: 2,
      icon: <ControlIcon className="capability-icon" />,
      title: 'Controlar com precisão o seu CMV (Custo de Mercadoria Vendida)',
    },
    {
      id: 3,
      icon: <ReportIcon className="capability-icon" />,
      title: 'Receber relatórios semanais com lucro, CMV e variações de custo',
    },
    {
      id: 4,
      icon: <UpdateIcon className="capability-icon" />,
      title: 'Atualizar preços e receitas automaticamente conforme os insumos mudam',
    },
  ];

  return (
    <section className="system-capabilities">
      <div className="container">
        <h2 className="capabilities-title">O que você pode fazer com o Chefia?</h2>
        
        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <div key={capability.id} className="capability-item">
              <div className="icon-wrapper">
                {capability.icon}
              </div>
              <h3 className="capability-title">{capability.title}</h3>
            </div>
          ))}
        </div>
        
        <button className="cta-button">Comece agora</button>
      </div>
    </section>
  );
};

export default SystemCapabilities;