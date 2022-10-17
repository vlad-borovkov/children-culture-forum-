import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from './../../images/LOGO.svg';
import menuBtn from './../../images/sandwitchMenu.svg';

function Header({ handleMenuClick }) {
  return (
    <header className='header'>
      <nav className='header__menu'>
        <img className='header__logo' src={logoPath} alt='логотип форума'></img>
        <div className='header__wrapper'>
          <ul className='header__navlinks'>
            <Link to='#' className='header__navlinks_item'>
              О форуме
            </Link>
            <Link to='#' className='header__navlinks_item'>
              Спикеры
            </Link>
            <Link to='#' className='header__navlinks_item'>
              Направления
            </Link>
            <Link to='#' className='header__navlinks_item'>
              Площадки
            </Link>
            <Link to='#' className='header__navlinks_item'>
              Программа
            </Link>
          </ul>
          <button className='header__btn-reg'>Регистрация</button>
        </div>
        <div className='header__sandwitch-menu'>
          <img
            src={menuBtn}
            alt='кнопка открытия меню'
            onClick={handleMenuClick}
          ></img>
        </div>
      </nav>
      <p className='header__date'>1-2 ноября</p>
      <h1 className='header__title'>I Сибирский детский культурный форум</h1>
      <h2>Делаем культуру - объедининяем мир.</h2>
      <p>#детскийфорум #культураСибири</p>
      <div className='header__btn-wrapper'>
        <button type='button' className='header__btn-details'>
          Подробнее
        </button>
        <button type='button' className='header__btn-reg'>
          Регистрация
        </button>
      </div>
    </header>
  );
}

export default Header;
