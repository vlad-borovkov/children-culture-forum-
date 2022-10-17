import React from 'react';
import speakersInfo from '../../context/speakers-info';

export default function Speakers() {
  return (
    <section className='speakers-section'>
      <h2 className='section-title'>Приглашённые спикеры форума</h2>
      <p className='section-subtitle'>
        Известные деятели культуры, кино и науки
      </p>
      <ul className='cards'>
        {speakersInfo.map((item, index) => (
          <li className='cards__item' key={index}>
            <img
              className='cards__image'
              src={item.image}
              alt={item.name}
            ></img>
            <h3 className='cards__title'>{item.name}</h3>
            <p className='cards__stream'>Направление: {item.stream}</p>
            <p className='cards__description'>{item.about}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
