import React from 'react';
import { Link } from 'react-router-dom';
import { emptyCartImage } from '../img';

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик порожній...Поки що.... <span>😕</span>
      </h2>
      <p>
        Найімовірніше, ви ще не замовляли піцу.
        <br />
        Щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={emptyCartImage} alt="Empty cart" />
      <Link to="/" className="button button--black" href="/">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
