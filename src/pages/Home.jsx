import '../scss/app.scss';
import Categories from '../components/categories/Categories';
import Pizza from '../components/pizza/Pizza';
import Sort from '../components/sort/Sort';
import { useEffect, useState } from 'react';
import PizzaSkeleton from '../components/pizza/PizzaSkeleton';
import Pagination from '../components/Pagination';

export const Home = ({ searchValue }) => {
  const [categorieId, setCategorieId] = useState(0);
  const [sort, setSort] = useState(0);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pizzasCount, setPizzasCount] = useState(0);
  const [curPage, setCurPage] = useState(1);

  const sortObj = {
    1: 'rating',
    2: 'price',
    3: 'title',
  };

  const cat = categorieId > 0 ? `category=` + categorieId : '';
  const sortBy = sort ? `&sortBy=` + sortObj[sort + 1] + '&order=asc' : '';

  const updatePizzas = (res) => {
    console.log(res);
    if (searchValue) {
      setPizzas(res.filter((i) => i.title.toLowerCase().includes(searchValue.toLowerCase())));
      setIsLoading(false);
    } else {
      setPizzas(res);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://633f0d390dbc3309f3c3efb9.mockapi.io/pizzas?page=${curPage}&limit=6&${cat}${sortBy}`,
    )
      .then((pizzas) => pizzas.json())
      .then((res) => {
        setPizzasCount(res.count);
        updatePizzas(res.items);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [categorieId, sort, searchValue, curPage]);


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
      <Pagination setCurPage={setCurPage} pizzasCount={pizzasCount} />
    </div>
  );
};
