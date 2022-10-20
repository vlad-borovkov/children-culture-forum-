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
            <a href='#about-forum' className='header__navlinks_item'>
              О форуме
            </a>
            <a href='#speakers' className='header__navlinks_item'>
              Спикеры
            </a>
            <a href='#streams' className='header__navlinks_item'>
              Направления
            </a>
            <a href='#places' className='header__navlinks_item'>
              Площадки
            </a>
            <a
              href='/#'
              download=''
              title='Скачать программу Форума'
              className='header__navlinks_item'
            >
              Программа
            </a>
          </ul>
          <a href='http://www.maxlib.ru/' className='header__btn-reg_header'>
            Регистрация
          </a>
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
          <a href='http://www.maxlib.ru/' className='header__btn-details'>
            Подробнее
          </a>
          <a href='http://www.maxlib.ru/' className='header__btn-reg'>
            Регистрация
          </a>
        </div>
        <p className='header__date'>1-2 ноября</p>
        <p className='header__city'>Новосибирск</p>
        <p className='headear__hashtag'>
          #детскийфорум #культураСибири #детивкультуреСибири #делаемкультуру
          #объединяеммир
        </p>
      </div>

      {/* <div className='header__page-decor-wrap'>
        <img
          className='header__page-decor-image'
          src={decor_page_1}
          alt='декоративный элемент'
        ></img>
      </div> */}
    </header>
  );
}

export default Header;
