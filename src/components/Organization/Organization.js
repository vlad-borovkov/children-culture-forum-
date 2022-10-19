import React from 'react';
import organizationInfo from './../../context/organization-Info';

export default function Organization() {
  console.log(organizationInfo);
  return (
    <section className='resources'>
      <h2 className='section-title'>Организаторы и партнёры Форума</h2>

      <ul className='resources__logo-list'>
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
    </section>
  );
}
