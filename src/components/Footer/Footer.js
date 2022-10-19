import React from 'react';
import detskayaBiblioteka from './../../images/logos/oblstnaya_detskaya.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        <div className='footer__column footer__column_content_copyright'>
          <div className='logo '>
            <img
              className='logo_place_footer'
              src={detskayaBiblioteka}
              alt='логотип'
            ></img>
          </div>
          <p className='footer__author'>
            &copy; 2022. Новосибирская детская областная библиотека & Vlad
            webDesign
          </p>
        </div>
        <div className='footer__column footer__column_content_info'>
          <h2 className='footer__column-heading'>
            I Сибирский детский культурный форум
          </h2>
          <nav className='footer__column-links'>
            <a className='footer__column-link' href='/#'>
              О форуме
            </a>
            <a className='footer__column-link' href='/#'>
              Программа форума
            </a>
            <a className='footer__column-link' href='/#'>
              Спикеры
            </a>
            <a className='footer__column-link' href='/#'>
              Направления
            </a>
            <a className='footer__column-link' href='/#'>
              Карта площадок
            </a>
          </nav>
        </div>
        <div className='footer__column footer__column_content_social'>
          <h2 className='footer__column-heading'>Мы на связи</h2>
          <a
            className='footer__column-link'
            href='https://vk.com/public216364187'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='footer__social-icon'
              src='images/vk_color_white.svg'
              alt='Вконтакте'
            ></img>
            Мы в Вконтакте
          </a>
          <a
            className='footer__column-link'
            href='/#'
            target='_blank'
            rel='noreferrer'
          >
            example@mail.com
          </a>
          <a
            className='footer__column-link'
            href='/#'
            target='_blank'
            rel='noreferrer'
          >
            +7 999 999 999
          </a>
        </div>
      </div>
    </footer>
  );
}
