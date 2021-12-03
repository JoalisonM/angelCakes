import { FormEvent } from "react";
import styles from "./styles.module.scss";

const Abstract = () => {
  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.abstractContainer}>
      <div className={styles.abstractContent}>
        <h1>Olá! Conheça a Bolo dos Anjos</h1>
        <p>Bem vindo à nossa loja! Esperamos proporcionar a todos os clientes uma experiência única do início ao fim.</p>
        <p>Qualquer dúvida, é só pesquisar:</p>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Pesquise aqui..." name="pesquisar" />
          <button type="submit">
            <img src="/images/lupa.svg" alt="pesquisar" />
          </button>
        </form>
      </div>
      <img className={styles.banner} src="/images/natal.jpeg" alt="bolo" width="508px" height="700px" />
    </div>
  );
};

export default Abstract;