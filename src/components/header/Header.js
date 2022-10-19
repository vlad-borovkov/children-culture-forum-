import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from './../../images/LOGO.svg';
import menuBtn from './../../images/sandwitchMenu.svg';
import header_decor_1 from './../../images/header_decor_1.svg';
import decor_page_1 from './../../images/page_decor_1.svg';

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
          <button className='header__btn-reg_header'>Регистрация</button>
        </div>

        <div className='header__sandwitch-menu'>
          <img
            src={menuBtn}
            alt='кнопка открытия меню'
            onClick={handleMenuClick}
          ></img>
        </div>
        <img
          className='header__decor-img'
          src={header_decor_1}
          alt='узор'
        ></img>
      </nav>

      <div className='header__title-wrap'>
        <h1 className='header__title__one'>I СИБИРСКИЙ ДЕТСКИЙ</h1>
        <h2 className='header__title__two'>КУЛЬТУРНЫЙ ФОРУМ</h2>
        <p className='header__slogan'>
          Делаем культуру &#8212; объединяем мир!
        </p>

        <div className='header__btn-wrapper'>
          <button type='button' className='header__btn-details'>
            Подробнее
          </button>
          <button type='button' className='header__btn-reg'>
            Регистрация
          </button>
        </div>
        <p className='header__date'>1-2 ноября</p>
        <p className='header__city'>Новосибирск</p>
        <p className='headear__hashtag'>
          #детскийфорум #культураСибири #детивкультуреСибири #делаемкультуру
          #объединяеммир
        </p>
      </div>

      <div className='header__page-decor-wrap'>
        <img
          className='header__page-decor-image'
          src={decor_page_1}
          alt='декоративный элемент'
        ></img>
      </div>
    </header>
  );
}

export default Header;
