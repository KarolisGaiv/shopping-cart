import { useState } from 'react';

function Cart() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div>
      <h1>You Shopping Cart:</h1>
      <div></div>
    </div>
  );
}

export default Cart;