import React from 'react';

export default function Map() {
  return (
    <section className='map'>
      <iframe
        src='https://yandex.com/map-widget/v1/?um=constructor%3A672e880f14b73bf2035e0be0a86e37b3b5f05190a3bbdbb17fc34a27116f0c65&amp;source=constructor'
        width='729'
        height='433'
        frameborder='0'
      ></iframe>
      <ul className='map__legend'>
        <li className='map__legend-item'>
          Новосибирская областная детская библиотека им. А. М. Горького
        </li>
        <li className='map__legend-item'>
          Новосибирская государственная областная научная библиотека
        </li>
      </ul>
    </section>
  );
}
