import './card.scss';

function Card({ name, regularPrice, salePrice, image }) {
  return (
    <div className='card'>
      <div className='card__picture'>
        <img src={image} alt='' />
      </div>
      <div className='card__details'>
        <h2 className='card__name'>{name}</h2>
        <h3 className='card__regular-price'>{regularPrice}</h3>
        <h1 className='card__sale-price'>{salePrice}</h1>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
