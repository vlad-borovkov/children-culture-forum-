import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from './../../images/LOGO.svg';

function Header() {
  return (
    <header className='header'>
      <nav className='header__menu'>
        <img className='header__logo' src={logoPath} alt='логотип форума'></img>
        <div className='header__wrapper'>
          <ul className='header__navlinks'>
            <Link to='#' className='header__navlinks_item'>
              О ФОРУМЕ
            </Link>
            <Link to='#' className='header__navlinks_item'>
              НАПРАВЛЕНИЯ
            </Link>
            <Link to='#' className='header__navlinks_item'>
              СПИКЕРЫ
            </Link>
            <Link to='#' className='header__navlinks_item'>
              ПЛОЩАДКИ
            </Link>
          </ul>
          <button className='header__btn-reg'>Регистрация</button>
        </div>
      </nav>

      <h1 className='header__title'>I Сибирский детский культурный форум</h1>
      <h2>
        Это площадка для сотворчества, социального проектирования, для поиска
        вдохновения и своего творческого пути.
      </h2>
      <div className='header__btn-wrapper'>
        <button className='header__btn-details'>Подробнее</button>
        <button className='header__btn-reg'>Регистрация</button>
      </div>
    </header>
  );
}

export default Header;
