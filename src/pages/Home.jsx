import '../scss/app.scss';
import Categories from '../components/categories/Categories';
import Pizza from '../components/pizza/Pizza';
import Sort from '../components/sort/Sort';
import { useEffect, useState } from 'react';
import PizzaSkeleton from '../components/pizza/PizzaSkeleton';
import Pagination from '../components/Pagination';
import { useContext } from 'react';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, changeSort, setCurPage } from '../redux/slices/filterSlice';
import axios from 'axios';

export const Home = () => {
  const categorieId = useSelector((state) => state.filter.categorieId);
  const pageCount = useSelector((state) => state.filter.pageCount);
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pizzasCount, setPizzasCount] = useState(0);

  const sortObj = {
    1: 'rating',
    2: 'price',
    3: 'title',
  };

  const cat = categorieId > 0 ? `category=` + categorieId : '';
  const sortBy = sort ? `&sortBy=` + sortObj[sort + 1] + '&order=asc' : '';

  const onChangePage = (number) => {
    dispatch(setCurPage(number));
  };

  const updatePizzas = (res) => {
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
    axios
      .get(
        `https://633f0d390dbc3309f3c3efb9.mockapi.io/pizzas?page=${pageCount}&limit=6&${cat}${sortBy}`,
      )
      .then((pizzas) => {
        setPizzasCount(pizzas.data.count);
        updatePizzas(pizzas.data.items);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [categorieId, sort, searchValue, pageCount]);

  return (
    <div className="containter">
      <div className="content__top">
        <Categories value={categorieId} onClickCategory={(i) => dispatch(changeFilter(i))} />
        <Sort value={sort} onClickSort={(i) => dispatch(changeSort(i))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((item) => {
              return <Pizza key={item.id} {...item}></Pizza>;
            })}
      </div>
      <Pagination setCurPage={onChangePage} pizzasCount={pizzasCount} />
    </div>
  );
};
