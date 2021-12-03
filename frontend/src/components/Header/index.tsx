import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="bolo dos anjos" />
        <nav>
          <a>Faça seu pedido</a>
          <button>Fazer login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;