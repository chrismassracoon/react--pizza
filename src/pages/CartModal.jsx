import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearPizzas } from '../redux/slices/cartSlice';
import './modal.scss';

const CartModal = ({ show, handleClose }) => {
  const { sum, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clickClose = () => {
    dispatch(clearPizzas());
    handleClose();
  };
  return (
    <>
      <Modal style={{ marginTop: '300px' }} show={show} onHide={clickClose}>
        <Modal.Header closeButton>
          <Modal.Title>Дякуємо за замовлення!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Дякуємо, ваше замовлення {amount} піц на суму {sum} грн прийняте! Ми зв'яжемось з вами
          найближчим часом.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clickClose}>
            Закрити
          </Button>
          <Link to="/" onClick={clickClose}>
            <Button style={{ backgroundColor: '#fe5f1e', color: 'white' }} variant="warning">
              На головну
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
