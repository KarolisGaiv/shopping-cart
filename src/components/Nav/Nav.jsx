import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className='logo'>
        <h3>This will be logo</h3>
      </div>
      <ul>
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
