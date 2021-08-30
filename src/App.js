import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import Cart from './components/ShoppingCart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
