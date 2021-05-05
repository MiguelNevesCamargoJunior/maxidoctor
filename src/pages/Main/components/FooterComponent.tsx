export function FooterComponent() {
  return (
    <footer>
      <div className="firstInside">
        <div className="element">
          <img src="/carrinho.svg" alt="Carrinho de compras" />
          <span>
            Facilidade
            <br />
            de compra
          </span>
        </div>
        <div className="element">
          <img src="/quantidade.svg" alt="Quantidade" />
          <span>
            Quantidade
            <br />
            não limitada
          </span>
        </div>
      </div>
      <div className="secondInside">
        <div className="element">
          <img src="/truck.svg" alt="Caminhão" />
          <span>Frete Grátis</span>
        </div>
        <div className="element">
          <img src="/moto.svg" alt="Entrega" />
          <span>Agilidade</span>
        </div>
        <div className="element">
          <img src="/sofa.svg" alt="Sofá" />
          <span>Comodidade</span>
        </div>
      </div>
    </footer>
  );
}
