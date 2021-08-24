import './card.scss';

function Card({ name, price }) {
  return (
    <div className='card'>
      <h1 className='card --name'>{name}</h1>
      <h3 className='card --price'>{price}</h3>
    </div>
  );
}

export default Card;
