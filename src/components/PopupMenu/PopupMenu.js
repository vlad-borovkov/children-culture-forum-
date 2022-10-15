import React from 'react';

//import closeIcone from './../../images/menuCloseIcon.svg'
import { Link } from 'react-router-dom';

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
            <p className='popup-menu__links-item'>О форуме</p>
            <p className='popup-menu__links-item'>Направления</p>
            <p className='popup-menu__links-item'>Спикеры</p>
            <p className='popup-menu__links-item'>Площадки</p>
            <p className='popup-menu__links-item'>Программа</p>
          </div>

          <Link className='menu__account_btn' path='#'>
            <img
              className='menu__account_btn_user-logo'
              src=''
              alt='кнопка аккаунта'
            ></img>
            <p className='menu__account_btn_user-set'>Мы в соц. сетях</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopupMenu;
