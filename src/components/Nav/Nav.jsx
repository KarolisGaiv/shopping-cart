import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <h3>This will be logo</h3>
      </div>
      <ul className='navigation --links-wrapper'>
        <Link to='/'>
          <li className='navigation --link'>Home</li>
        </Link>
        <Link to='/shop'>
          <li className='navigation --link'>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
