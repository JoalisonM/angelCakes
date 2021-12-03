import styles from "./styles.module.scss";

const Steps = () => {
  return (
    <div className={styles.stepsContainer}>
      <h1>Como funciona?</h1>
      <div className={styles.stepsContent}>
        <div className={styles.step}>
          <img src="images/select.svg" alt="selecionar" />
          <h3>Selecione os itens</h3>
          <p>Ao visualizar nosso catálogo, todos os detalhes do seu pedido são armazenados para garantir a satisfação total.</p>
        </div>

        <div className={styles.step}>
          <img src="images/location.svg" alt="selecionar" />
          <h3>Insira o seu endereço</h3>
          <p>Nosso sistema de entregas calculará todo o processo de entrega, proporcionando rapidez e segurança.</p>
        </div>

        <div className={styles.step}>
          <img src="images/payment.svg" alt="selecionar" />
          <h3>Meio de pagamento</h3>
          <p>Quando tudo estiver definido, basta  escolher o meio de pagamento que mais se adeque a sua necessidade.</p>
        </div>

        <div className={styles.step}>
          <img src="images/ready.svg" alt="selecionar" />
          <h3>Pronto</h3>
          <p>Agora é só esperar :)</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;