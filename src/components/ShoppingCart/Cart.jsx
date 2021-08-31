import './cart.scss';

function Cart({ cart }) {
  return (
    <div className='cart-wrapper'>
      <h1 className='cart-wrapper__header'>Games to Buy: {cart.length} </h1>
      <div className='cart-content'>
        {console.log(cart)}
        {cart.map((game, index) => {
          return (
            <ProductCard
              name={game.name}
              price={game.salePrice}
              quantity={game.quantity}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

function ProductCard({ name, price, quantity }) {
  return (
    <div className='product-card'>
      <div className='product-card__name'>{name}</div>
      <div className='product-card__price'>$ {price}</div>
      <div className='product-car__quantity'>{quantity}</div>
    </div>
  );
}

export default Cart;
