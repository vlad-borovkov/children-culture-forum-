import React from 'react';
import pointPath from './../../images/point_sample.svg';
import { Link } from 'react-router-dom';

function EventDetails() {
  return (
    <section className='event-details'>
      <div className='details__numbers-wrapper'>
        <div className='details__numbers'>
          <div className='details__numbers_item'>
            <img
              className='details__image'
              alt='forum-info'
              src={pointPath}
            ></img>
            {/* Экран 2.  -44
            мероприятия. Творческиеи встречи, мастер-классы, экскурсии,
            дискуссии. -22 эксперта. Деятели культуры и искусства по 6
            направлениям Форума. -10 проектных команд. Участники Форума из
            субъектов СФО и Новосибирской области примут участие в лаборатории
            идей. */}
            <div className='details__text-wrapper'>
              <p className='details__big-number'>1000</p>
              <p className='details__event-name'>учатсников</p>
              <p className='details__event-about'>
                Дети и подростки в возрасте от 12 до 18 лет
              </p>
            </div>
          </div>
          <div className='details__numbers_item'>
            <img
              className='details__image'
              alt='forum-info'
              src={pointPath}
            ></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>44</p>
              <p className='details__event-name'>Мероприятия</p>
              <p className='details__event-about'>
                Творческиеи встречи, мастер-классы, экскурсии, дискуссии.
              </p>
            </div>
          </div>
          <div className='details__numbers_item'>
            <img
              className='details__image'
              alt='forum-info'
              src={pointPath}
            ></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>22 </p>
              <p className='details__event-name'>эксперта</p>
              <p className='details__event-about'>
                Деятели культуры и искусства по 6 направлениям Форума.
              </p>
            </div>
          </div>
          <div className='details__numbers_item'>
            <img
              className='details__image'
              alt='forum-info'
              src={pointPath}
            ></img>
            <div className='details__text-wrapper'>
              <p className='details__big-number'>10</p>
              <p className='details__event-name'>Проектных команд</p>
              <p className='details__event-about'>
                Участники Форума из субъектов СФО и Новосибирской области примут
                участие в лаборатории идей.
              </p>
            </div>
          </div>
        </div>

        <div className='details__about-wrapper'>
          <h2 className='details__header'>
            Это площадка для сотворчества, социального проектирования, для
            поиска вдохновения и своего творческого пути.
          </h2>
          <p className='details__lead'>
            Дети и подростки в возрасте от 12 до 18 лет включительно получат
            возможность познакомиться с ведущими деятелями культуры и искусства,
            попробовать свои силы в творческих мастерских, а также смогут
            поработать в проектных командах и внести реальный вклад в развитие
            культурной жизни на своих территориях.
          </p>
          <p className='details__paragraph'>
            Форум станет местом встречи талантливых детей из всех регионов
            Сибирского федерального округа, из всех муниципальных образований
            Новосибирской области. Это площадка для сотворчества, социального
            проектирования, для поиска вдохновения и своего творческого пути.
            Более тысячи ребят посетят мероприятия культурной программы Форума.
          </p>
          <label>
            <b>Сократить немного. Сейчас взято из программы форума</b>
          </label>
          <button>Зарегистрироваться на форум</button>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
