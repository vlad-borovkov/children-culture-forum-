import React from 'react';
import vkontakte_icone from './../../images/icons8-vkontakte.svg';

const PopupMenu = ({ isOpenMenu, handleCloseMenu }) => {
  return (
    <div className={`popup ${isOpenMenu ? 'popup_on' : ''}`}>
      <button
        className='popup-menu__close-icone'
        type='button'
        onClick={handleCloseMenu}
      ></button>
      <div className='popup-menu__container'>
        <div className='popup-menu__menu'>
          <div className='popup-menu__links'>
            <a
              href='https://forms.yandex.ru/u/634facfbc09c0219e67df41c/'
              target='_blank'
              rel='noreferrer'
              className='popup-menu__links-item'
              onClick={handleCloseMenu}
            >
              Регистрация
            </a>
            <a
              href='https://disk.yandex.ru/i/EzofRcJqLgXlZg'
              target='_blank'
              rel='noreferrer'
              className='popup-menu__links-item'
              onClick={handleCloseMenu}
            >
              Программа
            </a>
            <a
              href='#about-forum'
              className='popup-menu__links-item'
              onClick={handleCloseMenu}
            >
              О форуме
            </a>
            <a
              href='#speakers'
              className='popup-menu__links-item'
              onClick={handleCloseMenu}
            >
              Спикеры
            </a>
            <a
              href='#streams'
              className='popup-menu__links-item'
              onClick={handleCloseMenu}
            >
              Направления
            </a>
            <a
              href='#places'
              className='popup-menu__links-item'
              onClick={handleCloseMenu}
            >
              Карта
            </a>
          </div>

          <a
            className='footer__column-link footer__column-link_popup'
            href='https://vk.com/public216364187'
            target='_blank'
            rel='noreferrer'
            onClick={handleCloseMenu}
          >
            <img
              className='footer__social-icon'
              src={vkontakte_icone}
              alt='Вконтакте'
            ></img>
            Вконтакте
          </a>
        </div>
      </div>
    </div>
  );
};
export default PopupMenu;
