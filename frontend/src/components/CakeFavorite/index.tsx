import styles from "./styles.module.scss";

const CakeFavorite = () => {
  return (
    <div className={styles.cakeContainer}>
      <img src="/images/boloFavorito.png" alt="bolo de chocolate com morango" />
      <div className={styles.cakeContent}>
        <h1>Peça o <span>Seu</span> Bolo Favorito.</h1>
        <p>
          Nós da Bolo dos Anjos procuramos oferecer aos clientes uma grande variedade de
          sabores e experiências, a fim de que todos encontrem aquele que mais se agrada.
        </p>
        <p>
          Cada sabor trás uma sensação única e inexplicavel, levando seu paladar “as alturas”.
        </p>
        <div>
          <img src="/images/bolo1.png" alt="bolo de chocolate" />
          <img src="/images/bolo2.png" alt="bolo de  chocolate com brigadeiros" />
        </div>
      </div>
    </div>
  );
};

export default CakeFavorite;