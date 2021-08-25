import './card.scss';

function Card({ name, regularPrice, salePrice, image }) {
  return (
    <div className='card'>
      <div className='card --picture'>
        <img src={image} alt='' />
      </div>
      <div className='card --details'>
        <h2 className='card --name'>{name}</h2>
        <h3 className='card'>{regularPrice}</h3>
        <h1 className='card --price'>{salePrice}</h1>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
