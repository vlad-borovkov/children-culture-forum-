import React from 'react';
import pointPath from './../../images/point_sample.svg';
import { Link } from 'react-router-dom';
import page_decor_2 from './../../images/page_decor_2.svg';
import Group from './../../images/numbers_page/Group.svg';
import Expert from './../../images/numbers_page/Expert.svg';
import Kalendar from './../../images/numbers_page/Kalendar.svg';
import Komanda from './../../images/numbers_page/Komanda.svg';

function EventDetails() {
  return (
    <section id='about-forum' className='event-details'>
      <div className='details__numbers-wrapper'>
        <div className='details__numbers'>
          <div className='details__numbers_item'>
            <img className='details__image' alt='forum-info' src={Group}></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>1000</p>
              <p className='details__event-name'>участников</p>
              <p className='details__event-about'>
                Дети и подростки в возрасте от 12 до 18 лет
              </p>
            </div>
          </div>
          <div className='details__numbers_item'>
            <img
              className='details__image'
              alt='forum-info'
              src={Kalendar}
            ></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>44</p>
              <p className='details__event-name'>мероприятия</p>
              <p className='details__event-about'>
                Яркие творческие встречи, мастер-классы, экскурсии и дискуссии
              </p>
            </div>
          </div>
          <div className='details__numbers_item'>
            <img className='details__image' alt='forum-info' src={Expert}></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>22 </p>
              <p className='details__event-name'>эксперта</p>
              <p className='details__event-about'>
                Известные деятели культуры и искусства
              </p>
            </div>
          </div>
          <div className='details__numbers_item'>
            <img
              className='details__image'
              alt='forum-info'
              src={Komanda}
            ></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>10</p>
              <p className='details__event-name'>проектных команд</p>
              <p className='details__event-about'>
                Из субъектов СФО и Новосибирской области примут участие в
                лаборатории идей
              </p>
            </div>
          </div>
        </div>

        <div className='details__about-wrapper'>
          <h2 className='details__header'>
            Делаем культуру &#8212; объединяем мир!
          </h2>
          <p className='details__lead'>
            Форум станет местом встречи талантливых детей из регионов Сибирского
            федерального округа и Новосибирской области
          </p>
          <p className='details__paragraph'>
            Это площадка для сотворчества, социального проектирования, поиска
            вдохновения и своего творческого пути. Дети и подростки познакомятся
            с ведущими деятелями культуры и искусства. Ребята попробуют свои
            силы в проектных командах, чтобы потом внести реальный вклад в
            развитие культурной жизни на своих территориях.
          </p>
          <a
            href='https://forms.yandex.ru/u/634facfbc09c0219e67df41c/'
            target='_blank'
            rel='noreferrer'
            className='details__reg-button'
          >
            Стать участником
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
