
import './scss/app.scss'
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Pizza from './components/pizza/Pizza';
import Sort from './components/sort/Sort';
import { useEffect, useState } from 'react';




function App() {
	const [pizzas, setPizzas] = useState([]);
	useEffect(() => {
		fetch('https://633f0d390dbc3309f3c3efb9.mockapi.io/pizzas')
		.then(pizzas => pizzas.json())
		.then(res => setPizzas(res))
		.catch(err => console.log(err))
	}, [])
	return (
<div className="wrapper">
     <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
				{pizzas.map(item => {
					return <Pizza key={item.id} {...item}></Pizza>
				})}
</div>
        </div>
      </div>
    </div>
	);
}

export default App;
