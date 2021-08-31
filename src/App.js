import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import Cart from './components/ShoppingCart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.scss';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addProduct(game) {
    setCart((previousCart) => [...previousCart, game]);
  }

  return (
    <Router>
      <div className='App'>
        <Nav cart={cart} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/shop'
            render={() => <ShopPage addProduct={addProduct} />}
          />
          <Route exact path='/cart' render={() => <Cart cart={cart} />} />
        </Switch>
      </div>
      {console.log(cart)}
    </Router>
  );
}

export default App;
