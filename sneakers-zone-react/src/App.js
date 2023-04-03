import './index.scss';

import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

import { Btn_remov, Search } from './images';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://64257b9c7ac292e3cf01f720.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://64257b9c7ac292e3cf01f720.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://64257b9c7ac292e3cf01f720.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete('https://64257b9c7ac292e3cf01f720.mockapi.io/cart',{id});
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const onChangeSearchInput = (even) => {
    setSearchValue(even.target.value);
  };


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className='content p-40'>

        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className='search-block d-flex'>
            <img src={Search} alt='Search' />
            {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src={Btn_remov} alt='Clear' />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items
            .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                //onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
