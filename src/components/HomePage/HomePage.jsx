import './homePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home-wrapper'>
      <div className='page-intro'>
        <h1 className='page-intro__header'>Best Place For Games</h1>
        <Link to='/shop'>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
