import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function Nav({ cart }) {
  useEffect(() => {
    navSlide();
  }, []);

  function navSlide() {
    const mobileNav = document.querySelector('.navigation__mobile-nav');
    const navigationWrapper = document.querySelector(
      '.navigation__links-wrapper'
    );
    const navigationLinks = document.querySelectorAll('.navigation__link');

    mobileNav.addEventListener('click', () => {
      // Toggle Navigation
      navigationWrapper.classList.toggle('--active');

      //Animate Links
      navigationLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navigationLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      // Burger animation
      mobileNav.classList.toggle('--toggle');
    });
  }

  function calcCartSize() {
    let counter = 0;
    cart.forEach((game) => {
      counter = counter + game.quantity;
    });
    if (counter === 0) {
      return null;
    }
    return counter;
  }

  return (
    <nav className='navigation'>
      <div className='navigation__logo'>
        <Link to='/'>
          <h3>Game Shop</h3>
        </Link>
      </div>
      <ul className='navigation__links-wrapper'>
        <Link to='/'>
          <li className='navigation__link'>Home</li>
        </Link>
        <Link to='/shop'>
          <li className='navigation__link'>Shop</li>
        </Link>
        <Link to='/cart' className='counter-wrapper'>
          <li className='navigation__link'>Cart</li>
          {cart.length > 0 ? (
            <div className='counter-wrapper__counter'>{calcCartSize()}</div>
          ) : null}
        </Link>
      </ul>
      <div className='navigation__mobile-nav'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default Nav;
