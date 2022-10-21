import React from 'react';
import adressForMap from '../../context/adress-map';

export default function Map() {
  return (
    <section id='places' className='map'>
      <h2 className='section-title'>Форум на карте Новосибирска</h2>
      <p className='section-subtitle'>
        Перемещайся по карте и нажми на метку, чтобы узнать подробности
      </p>
      <div className='map-wrap'>
        <iframe
          className='map__container'
          title='карта культурных событий'
          src='https://yandex.com/map-widget/v1/?um=constructor%3A672e880f14b73bf2035e0be0a86e37b3b5f05190a3bbdbb17fc34a27116f0c65&amp;source=constructor'
          width='601'
          height='672'
          frameBorder='0'
        ></iframe>
        <ul className='map__legend'>
          {adressForMap.map((item) => (
            <>
              <p key={item.id} className='map__legend-title'>
                {item.stream}
              </p>
              {item.places.map((item) => (
                <li key={item.id} className='map__legend-place'>
                  {item.name}
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
      <div className='stream-button__wrap'>
        <div className='stream-button__text-wrap'>
          <p className='stream-button__slogan'>Нашёл своё? Регистрируйся!</p>
          <p className='stream-button__disclamer'>Места ограничены</p>
        </div>
        <a
          href='https://forms.yandex.ru/u/634facfbc09c0219e67df41c/'
          target='_blank'
          rel='noreferrer'
          className='stream-button'
        >
          Стать участником
        </a>
      </div>
    </section>
  );
}
