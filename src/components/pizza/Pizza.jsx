import { useState } from 'react';
import { addPizzas } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';

const Pizza = ({ title, price, imageUrl, sizes, types, id }) => {
  const pizzas = useSelector((state) => state.cart.pizzas);
  const [actualCount, setActualCount] = useState(0);
  useEffect(() => {
	if(pizzas){
		let count = 0;
		pizzas.forEach(i => i.id == id ? count = count + i.count : null);
		setActualCount(count)
	}
  })
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  let actualPrice;
  useEffect(() => {
    if (types.length == 1) {
      setActiveType(types[0]);
    }
  }, []);
  const dispatch = useDispatch();
  const typeNames = ['тонке', 'традиційне'];
  switch (activeSize) {
    case 0:
      actualPrice = Math.floor(price);
      break;
    case 1:
      actualPrice = Math.floor(price * 1.2);
      break;
    case 2:
      actualPrice = Math.floor(price * 1.4);
      break;
  }
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, i) => (
            <li
              key={i}
              onClick={() => setActiveType(type)}
              className={activeType == type ? 'active' : ''}>
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((item, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'active' : ''}>
              {item} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{actualPrice} ₴</div>
        <div
          onClick={() => {
            dispatch(addPizzas({ title, actualPrice, imageUrl, activeSize, activeType, id }));
          }}
          className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          <i>{actualCount}</i>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
