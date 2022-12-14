import React from 'react';
import styles from './notFoundBlock.module.scss';
export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        {' '}
        <span>😞</span> <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению, эта страница отстутсвует в нашем интернет магазине
      </p>
    </div>
  );
};
