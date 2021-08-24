import './homePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='content'>
      <Link to='/shop'>
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default HomePage;
