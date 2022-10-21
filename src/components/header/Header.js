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
              href='https://disk.yandex.ru/i/EzofRcJqLgXlZg'
              target='_blank'
              rel='noreferrer'
              className='header__navlinks_item'
            >
              Программа
            </a>
          </ul>
          <a
            href='https://forms.yandex.ru/u/634facfbc09c0219e67df41c/'
            target='_blank'
            rel='noreferrer'
            className='header__btn-reg_header'
          >
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
          <a href='#about-forum' className='header__btn-details'>
            Подробнее
          </a>
          <a
            href='https://forms.yandex.ru/u/634facfbc09c0219e67df41c/'
            target='_blank'
            rel='noreferrer'
            className='header__btn-reg'
          >
            Регистрация
          </a>
        </div>
        <p className='header__date'>1-2 ноября</p>
        <p className='header__city'>Новосибирск</p>
        <div className='headear__hashtag-set'>
          <div className='headear__hashtag_first-line'>
            <p className='headear__hashtag-item'>#детскийфорум</p>
            <p className='headear__hashtag-item'>#культураСибири</p>
          </div>
          <div className='headear__hashtag_second-line'>
            <p className='headear__hashtag-item'>#детивкультуреСибири</p>
          </div>
          <div className='headear__hashtag_third-line'>
            <p className='headear__hashtag-item'>#делаемкультуру</p>
            <p className='headear__hashtag-item'>#объединяеммир</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
