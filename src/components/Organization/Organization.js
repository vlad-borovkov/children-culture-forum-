import React from 'react';
import {
  partnersInfo,
  organizationInfo,
} from './../../context/organization-Info';

export default function Organization() {
  return (
    <section className='resources'>
      <h2 className='section-title'>Организаторы Форума</h2>
      <ul className='resources__logo-list_org'>
        {organizationInfo.map((item, index) => (
          <li className='resources__logo-item' key={index}>
            <a
              className='resources__logo-link'
              href={item.link}
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='resources__logo'
                src={item.logo}
                alt={item.name}
              ></img>
            </a>
            {/* <p className='resources__logo-about'>{item.name}</p> */}
          </li>
        ))}
      </ul>
      <h2 className='section-title'>Партнёры Форума</h2>
      <ul className='resources__logo-list'>
        {partnersInfo.map((item, index) => (
          <li className='resources__logo-item' key={index}>
            <a
              className='resources__logo-link'
              href={item.link}
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='resources__logo'
                src={item.logo}
                alt={item.name}
              ></img>
            </a>
            {/* <p className='resources__logo-about'>{item.name}</p> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
