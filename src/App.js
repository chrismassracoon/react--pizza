import './scss/app.scss';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
