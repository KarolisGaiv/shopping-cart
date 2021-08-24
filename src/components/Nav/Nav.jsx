import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <h3>This will be logo</h3>
      </div>
      <ul className='navigation --links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
