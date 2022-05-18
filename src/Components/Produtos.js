import React from 'react';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <Head title="Desafio | Produtos" description="" />
      <h1>Produtos</h1>
    </div>
  );
};

export default Produtos;
