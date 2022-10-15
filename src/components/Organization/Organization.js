import React from 'react';

export default function Organization() {
  return (
    <section className='resources'>
      <h2 className='section-title'>Организаторы форума</h2>

      <div className='resources__logo-zone'>
        <a href='#'>
          {' '}
          <img
            className='resources__logo'
            src='images/logo/resources-arzamas.svg'
            alt='логотип Арзамас'
          ></img>
        </a>
        <a href='#'>
          <img
            className='resources__logo'
            src='images/logo/resources-n1.svg'
            alt='логотип Эн плюс один'
          ></img>
        </a>
        <a href='#'>
          <img
            className='resources__logo'
            src='images/logo/resources-strelka.svg'
            alt='логотип Стрелка'
          ></img>
        </a>
        <a href='#'>
          <img
            className='resources__logo'
            src='images/logo/resources-polka.svg'
            alt='логотип Полка'
          ></img>
        </a>
      </div>
    </section>
  );
}
