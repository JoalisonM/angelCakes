import styles from "./styles.module.scss";

const Catalog = () => {
  return (
    <div className={styles.catalogContainer}>
      <h1>Nosso Catálogo</h1>
      <div className={styles.catalogOptions}>
        <div className={styles.option}>
          <img src="/images/coco.jpeg" alt="bolo de coco" />
          <div>
            <span>
              Bolo de Coco
              <img src="/images/bag.svg" alt="sacola" />
            </span>
            <p>Massa de coco e cobertura de leite condensado e leite de coco. Com Brigadeiros.</p>
            <p>A partir de R$ 20,00</p>
          </div>
        </div>

        <div className={styles.option}>
          <img src="/images/ninhoMorango.jpeg" alt="bolo de coco" />
          <div>
            <span>
              Bolo de ninho
              <img src="/images/bag.svg" alt="sacola" />
            </span>
            <p>Massa de coco e cobertura de leite condensado e leite de coco. Com Brigadeiros.</p>
            <p>A partir de R$ 20,00</p>
          </div>
        </div>

        <div className={styles.option}>
          <img src="/images/criança.jpeg" alt="bolo de coco" />
          <div>
            <span>
              Bolo piscina
              <img src="/images/bag.svg" alt="sacola" />
            </span>
            <p>Massa de coco e cobertura de leite condensado e leite de coco. Com Brigadeiros.</p>
            <p>A partir de R$ 20,00</p>
          </div>
        </div>

        <div className={styles.option}>
          <img src="/images/chocoNinho.jpeg" alt="bolo de coco" />
          <div>
            <span>
              Choconinho
              <img src="/images/bag.svg" alt="sacola" />
            </span>
            <p>Massa de coco e cobertura de leite condensado e leite de coco. Com Brigadeiros.</p>
            <p>A partir de R$ 20,00</p>
          </div>
        </div>
      </div>
      <button>Ver mais...</button>
    </div>
  );
};

export default Catalog;