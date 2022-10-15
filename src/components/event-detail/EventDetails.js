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
            Погрузитесь в мир творчества вместе с нами!
          </h2>
          <p className='details__lead'>
            In the educational process you’ll do many practical work and will be
            able to form your own portfolio, which can be used in your future
            work.
          </p>
          <p className='details__paragraph'>
            We work with top IT specialists who have a talent to share their
            knowledge and give professional advices to students. All of them
            work in IT industry and know about the latest tendencies in this
            sphere. We stand for the full development of skills, thats why we
            work on both hard and soft skills, which are equally important.
          </p>
          <button>Зарегистрироваться на форум</button>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
