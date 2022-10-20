import '../scss/app.scss'
import Categories from '../components/categories/Categories';
import Pizza from '../components/pizza/Pizza';
import Sort from '../components/sort/Sort';
import { useEffect, useState } from 'react';
import PizzaSkeleton from '../components/pizza/PizzaSkeleton';

export const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const updatePizzas = (res) => {
		setPizzas(res);
		setIsLoading(false);
	}
	useEffect(() => {
		fetch('https://633f0d390dbc3309f3c3efb9.mockapi.io/pizzas')
		.then(pizzas => pizzas.json())
		.then(res => updatePizzas(res))
		.catch(err => console.log(err))
	}, [])
  return (
	<>
	<div className="content__top">
	<Categories/>
	<Sort/>
		</div>
		<h2 className="content__title">Все пиццы</h2>
		<div className="content__items">
			{isLoading ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>) : pizzas.map(item => {
				return <Pizza key={item.id} {...item}></Pizza>})}
		</div>
</>
  )
}
