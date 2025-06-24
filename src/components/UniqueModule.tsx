const UniqueModule: React.FC = () => {
  return (
    <section className="module-unique-section" id="modulos">
      <div className="module-unique-wrapper">
        <h2 className="module-unique-title">
          Módulo <span>Único</span>
        </h2>

        {/* Container único com as duas colunas dentro */}
        <div className="unique-module-container">
          <div className="module-columns">
            {/* Coluna 1 - Fichas Técnicas */}
            <div className="module-section">
              <h3 className="module-section-title">Fichas Técnicas</h3>
              <ul className="module-feature-list">
                <li className="module-feature-item">Criação simplificada e rápida de fichas técnicas</li>
                <li className="module-feature-item">Estrutura padronizada com rendimento, porção, custo e peso</li>
                <li className="module-feature-item">Adição automática de insumos com base no estoque</li>
                <li className="module-feature-item">Cálculo automático de custo por porção e custo total</li>
                <li className="module-feature-item">Agrupamento por categorias (entradas, pratos, bebidas etc.)</li>
                <li className="module-feature-item">Inserção de instruções de preparo</li>
              </ul>
            </div>

            {/* Coluna 2 - CMV e Precificação */}
            <div className="module-section">
              <h3 className="module-section-title">CMV e Precificação</h3>
              <ul className="module-feature-list">
                <li className="module-feature-item">Controle automático do CMV por prato e por período</li>
                <li className="module-feature-item">Atualização de custos com base no preço real dos insumos</li>
                <li className="module-feature-item">Comparação entre o CMV ideal e o real</li>
                <li className="module-feature-item">Identificação de desvios e perdas</li>
                <li className="module-feature-item">Alertas de variações críticas nos custos</li>
                <li className="module-feature-item">Preço de venda automático, com base real da ficha técnica</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueModule;