import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './shopPage.scss';

function ShopPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
    );
    const data = await response.json();
    setGames(data);
    console.log(data);
  };

  return (
    <div className='shop-wrapper'>
      {console.log(games)}
      {games.map((game) => {
        return (
          <Card
            name={game.title}
            regularPrice={game.normalPrice}
            salePrice={game.salePrice}
            key={game.steamAppID}
            image={game.thumb}
          />
        );
      })}
    </div>
  );
}

export default ShopPage;
