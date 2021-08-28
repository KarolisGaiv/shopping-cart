import './card.scss';

function Card({ name, regularPrice, salePrice, image, setShoppingCart }) {
  function addProduct() {
    const gameToBuy = {
      name,
      salePrice,
      quantity: 1,
    };
    setShoppingCart((prevItems) => [...prevItems, gameToBuy]);
  }

  return (
    <div className='card'>
      <div className='card__picture'>
        <img src={image} alt='' />
      </div>
      <div className='card__details'>
        <h2 className='card__name'>{name}</h2>
        <h3 className='card__regular-price'>Old Price $ {regularPrice}</h3>
        <h1 className='card__sale-price'>On Sale $ {salePrice}</h1>
      </div>
      <button onClick={addProduct} className='card__button'>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
