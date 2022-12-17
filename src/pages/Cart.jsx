import React from 'react';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';
import EmptyCart from './EmptyCart';
import MainCart from './MainCart';
import { useState } from 'react';

export const Cart = () => {
  const pizzas = useSelector((state) => state.cart.pizzas);
  const [show, setShow] = useState(false);

  return (
    <div className="containter container--cart">
      {pizzas.length ? <MainCart setShow={setShow}/> : <EmptyCart />}
      <CartModal show={show}></CartModal>
    </div>
  );
};
