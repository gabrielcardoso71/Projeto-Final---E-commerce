import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem-vindo ao Sniker Shoes</h1>
        <p>
          Descubra os melhores produtos com preços incríveis. Aqui você encontra
          qualidade, praticidade e segurança em um só lugar. Navegue e
          aproveite!
        </p>
      </header>
    </div>
  );
};

export default Home;
