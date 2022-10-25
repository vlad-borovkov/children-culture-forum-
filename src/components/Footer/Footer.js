import React from 'react';
import detskayaBiblioteka from './../../images/logos/oblstnaya_detskaya.svg';
import vkontakte_icone from './../../images/icons8-vkontakte.svg';
import mincult_1 from './../../images/logos/mincult_1.png';
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        <div className='footer__column footer__column_content_copyright'>
          <div className='logo '>
            <img
              className='logo_place_footer'
              src={mincult_1}
              alt='Министерство культуры НСО'
            ></img>
            <img
              className='logo_place_footer'
              src={detskayaBiblioteka}
              alt='Новосибирская детская областная библиотека'
            ></img>
          </div>
          <p className='footer__author'>
            &copy; 2022. Государственное бюджетное учреждение культуры
            Новосибирской области «Областная детская библиотека им. А. М.
            Горького»
          </p>
        </div>
        <div className='footer__column footer__column_content_info'>
          <h2 className='footer__column-heading'>
            I Сибирский детский культурный Форум
          </h2>
          <nav className='footer__column-links'>
            <a href='#about-forum' className='footer__column-link'>
              О Форуме
            </a>
            <a
              href='https://disk.yandex.ru/i/EzofRcJqLgXlZg'
              target='_blank'
              rel='noreferrer'
              className='footer__column-link'
            >
              Программа Форума
            </a>
            <a href='#speakers' className='footer__column-link'>
              Спикеры
            </a>
            <a href='#streams' className='footer__column-link'>
              Направления
            </a>
            <a href='#places' className='footer__column-link'>
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
              src={vkontakte_icone}
              alt='Вконтакте'
            ></img>
            Вконтакте
          </a>
          <a
            className='footer__column-link'
            href='mailto:proekt.nodb@yandex.ru'
            target='_blank'
            rel='noreferrer'
          >
            proekt.nodb@yandex.ru
          </a>
          <p className='footer__column-description'>
            В теме письма укажите направление Форума
          </p>
        </div>
      </div>
    </footer>
  );
}
