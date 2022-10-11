
import './scss/app.scss'
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Pizza from './components/pizza/Pizza';
import Sort from './components/sort/Sort';



function App() {
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
			 <Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
		<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza> 
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
	<Pizza title={'Чизбургер-пицца'} price={392} img={"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}>
	</Pizza>
</div>
        </div>
      </div>
    </div>
	);
}

export default App;
