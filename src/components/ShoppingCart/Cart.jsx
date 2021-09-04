import { useEffect, useState } from 'react';
import './cart.scss';
import { Link, useHistory } from 'react-router-dom';

function Cart({ cart, setCart }) {
  let history = useHistory();
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    let totalAmount = calcTotalAmount();
    setTotalPrice(totalAmount);
  }, [cart]);

  function calcTotalAmount() {
    let total = 0;
    cart.forEach((game) => {
      total = Math.round((total + game.salePrice * game.quantity) * 100) / 100;
    });
    return total;
  }

  function calcCartSize() {
    let counter = 0;
    cart.forEach((game) => {
      counter = counter + game.quantity;
    });
    return counter;
  }

  function resetCart() {
    setCart([]);
    alert('You purchase was successful. Thanks for choosing us!');
    history.push('/');
  }

  return (
    <div>
      {cart.length < 1 ? (
        <div className='warning-message'>
          Your Cart Is Empty
          <Link to='/shop' className='warning-message__link'>
            <button className='warning-message__shop-btn'>Visit Shop</button>
          </Link>
        </div>
      ) : (
        <div>
          <div className='cart-wrapper'>
            <h1 className='cart-wrapper__header'>
              Games to Buy: {calcCartSize()}{' '}
            </h1>
            <div className='cart-wrapper__content'>
              {cart.map((game, index) => {
                return (
                  <ProductCard
                    name={game.name}
                    price={game.salePrice}
                    key={index}
                    image={game.image}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              })}
            </div>
          </div>
          <div className='order-info'>
            <div className='order-info__total-price'>
              Total Price: {totalPrice}
            </div>
            <button className='order-info__purchase-btn' onClick={resetCart}>
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ name, price, image, cart, setCart }) {
  const [count, setCount] = useState(1);

  function incrementQuantity() {
    const gameIndex = cart.findIndex((game) => game.name === name);
    let newQuantity = count + 1;
    setCount(newQuantity);
    // copy original array of games
    let gameCart = [...cart];
    // copy targeted game item
    let targetGame = { ...gameCart[gameIndex] };
    // update targeted game quanitity
    targetGame.quantity = count;
    // replace updated game
    gameCart[gameIndex] = targetGame;
    setCart(gameCart);
  }

  function decrementQuantity() {
    const gameIndex = cart.findIndex((game) => game.name === name);
    let newQuantity = count - 1;
    setCount(newQuantity);
    // copy original array of games
    let gameCart = [...cart];
    // copy targeted game item
    let targetGame = { ...gameCart[gameIndex] };
    // update targeted game quanitity
    targetGame.quantity = count;
    // replace updated game
    gameCart[gameIndex] = targetGame;
    setCart(gameCart);
  }

  return (
    <div className='product-card'>
      <div className='product-card__image'>
        <img src={image} alt='' />
      </div>
      <div className='product-card__name'>{name}</div>
      <div className='product-card__price'>
        <span>Price</span>
        <span>$ {price}</span>
      </div>
      <div className='product-card__quantity'>
        <span>Quantity</span>
        <div className='product-card__quantity__button-wrapper'>
          <button
            onClick={incrementQuantity}
            className='product-card__quantity__btn'
          >
            +
          </button>
          <span>{count}</span>
          <button
            className='product-card__quantity__btn'
            id={name}
            onClick={decrementQuantity}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
