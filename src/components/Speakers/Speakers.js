import React from 'react';
import speakersInfo from '../../context/speakers-info';

export default function Speakers() {
  return (
    <section id='speakers' className='speakers-section'>
      <h2 className='section-title'>Эксперты Форума</h2>
      <p className='section-subtitle'>
        Гостями и основными спикерами станут деятели культуры и искусства из
        Москвы и Новосибирска
      </p>
      <ul className='cards'>
        {speakersInfo.map((item, index) => (
          <li className='cards__item' key={index}>
            <img
              className='cards__image'
              src={item.image}
              alt={item.name}
            ></img>

            <div className='card__description-wrap'>
              <h3 className='cards__title'>{item.name}</h3>
              <p className='cards__description'>
                {item.about}
                <p className='cards__stream'>{item.stream}</p>
                <p className='cards__city'>{item.city}</p>
              </p>
            </div>
            {/* <div className='card__city-wrap'>
              <p className='cards__stream'>{item.stream}</p>
              <p className='cards__city'>{item.city}</p>
            </div> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
