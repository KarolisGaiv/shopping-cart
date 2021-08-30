import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <nav className='navigation'>
      <div className='navigation__logo'>
        <h3>Game Shop</h3>
      </div>
      <ul className='navigation --links-wrapper'>
        <Link to='/'>
          <li className='navigation --link'>Home</li>
        </Link>
        <Link to='/shop'>
          <li className='navigation --link'>Shop</li>
        </Link>
        <Link to='/cart'>
          <li className='navigation --link'>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

/*
https://www.youtube.com/watch?v=gXkqy0b4M5g
!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!
!!!!!!!!!!!!!!
*/
