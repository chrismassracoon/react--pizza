
import './scss/app.scss'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';

function App() {

return (
<div className="wrapper">
     <Header/>
      <div className="content">
        <div className="container">
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='*' element={<NotFound></NotFound>} />
			</Routes>
        </div>
      </div>
    </div>
	);
}
export default App;
