import { useEffect, useState } from 'react';
import './cart.scss';
import { Link } from 'react-router-dom';

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    let totalAmount = calculateTotal();
    setTotalPrice(totalAmount);
  }, [cart]);

  function calculateTotal() {
    let total = 0;
    cart.forEach((game) => {
      total = Math.round((total + game.salePrice * game.quantity) * 100) / 100;
    });
    return total;
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
              Games to Buy: {cart.length}{' '}
            </h1>
            <div className='cart-wrapper__content'>
              {cart.map((game, index) => {
                return (
                  <ProductCard
                    name={game.name}
                    price={game.salePrice}
                    quantity={game.quantity}
                    key={index}
                    image={game.image}
                  />
                );
              })}
            </div>
          </div>
          <div className='order-info'>
            <div className='order-info__total-price'>
              Total Price: {totalPrice}
            </div>
            <button className='order-info__purchase-btn'>Buy</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ name, price, quantity, image }) {
  return (
    <div className='product-card'>
      <div className='product-card__image'>
        <img src={image} alt='' />
      </div>
      <div className='product-card__name'>{name}</div>
      <div className='product-card__price'>$ {price}</div>
      <div className='product-car__quantity'>{quantity}</div>
    </div>
  );
}

export default Cart;
