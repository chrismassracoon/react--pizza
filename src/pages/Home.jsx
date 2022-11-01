import '../scss/app.scss';
import Categories from '../components/categories/Categories';
import Pizza from '../components/pizza/Pizza';
import Sort from '../components/sort/Sort';
import { useEffect, useState } from 'react';
import PizzaSkeleton from '../components/pizza/PizzaSkeleton';

export const Home = () => {
  const [categorieId, setCategorieId] = useState(0);
  const [sort, setSort] = useState(0);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortObj = {
    1: 'rating',
    2: 'price',
    3: 'title',
  };

  const cat = categorieId > 0 ? `category=` + categorieId : '';
  const sortBy = sort ? `&sortBy=` + sortObj[sort+1] + '&order=asc' : '';

  const updatePizzas = (res) => {
    setPizzas(res);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    console.log(`https://633f0d390dbc3309f3c3efb9.mockapi.io/pizzas${cat}${sortBy}`);
    fetch(`https://633f0d390dbc3309f3c3efb9.mockapi.io/pizzas?${cat}${sortBy}`)
      .then((pizzas) => pizzas.json())
      .then((res) => updatePizzas(res))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [categorieId, sort]);

  return (
    <div className="containter">
      <div className="content__top">
        <Categories value={categorieId} onClickCategory={(i) => setCategorieId(i)} />
        <Sort value={sort} onClickSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((item) => {
              return <Pizza key={item.id} {...item}></Pizza>;
            })}
      </div>
    </div>
  );
};
