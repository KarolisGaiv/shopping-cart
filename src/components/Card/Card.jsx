import './card.scss';

function Card({ name, price, image }) {
  return (
    <div className='card'>
      <h1 className='card --name'>{name}</h1>
      <h3 className='card --price'>{price}</h3>
      <img src={image} alt='' />
    </div>
  );
}

export default Card;
