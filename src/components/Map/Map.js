import React from 'react';
import adressForMap from '../../context/adress-map';

export default function Map() {
  return (
    <section className='map'>
      <h2 className='section-title'>Детский форум на карте города</h2>
      <p className='section-subtitle'>
        Нажми на метку чтобы узнать подробности и перемещайся по карте
      </p>
      <div className='map-wrap'>
        <iframe
          title='карта культурных событий'
          src='https://yandex.com/map-widget/v1/?um=constructor%3A672e880f14b73bf2035e0be0a86e37b3b5f05190a3bbdbb17fc34a27116f0c65&amp;source=constructor'
          width='729'
          height='533'
          frameborder='0'
        ></iframe>
        <ul className='map__legend'>
          {adressForMap.map((item, index) => (
            <>
              <p>
                <b key={index}>{item.stream}</b>
              </p>
              {item.places.map((item, index) => (
                <li key={index} className='map__legend-item'>
                  {item.name}
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
    </section>
  );
}
