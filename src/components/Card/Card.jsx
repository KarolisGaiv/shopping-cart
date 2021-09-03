import './card.scss';

function Card({ name, regularPrice, salePrice, image, handleClick }) {
  function addProduct() {
    const gameToBuy = {
      name,
      salePrice,
      quantity: 1,
      image,
    };
    // pass game object up to parent App.js component state
    handleClick(gameToBuy);
  }

  return (
    <div className='card'>
      <div className='card__picture'>
        <img src={image} alt='game banner' />
      </div>
      <div className='card__details'>
        <h2 className='card__name'>{name}</h2>
        <h4 className='card__regular-price'>Old Price $ {regularPrice}</h4>
        <h1 className='card__sale-price'>On Sale $ {salePrice}</h1>
      </div>
      <button onClick={addProduct} className='card__button'>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
