import React from 'react';

export default function StreamItem({
  streamLogo,
  streamName,
  description,
  justifyType,
}) {
  return (
    <li className={`stream__item ${justifyType}`}>
      <img
        className='stream__logo'
        src={streamLogo}
        alt='логотип направления'
      ></img>
      <div className='stream__about-wrap'>
        <h3 className='stream__title'>{streamName}</h3>
        <p className='stream__description'>{description}</p>
      </div>
    </li>
  );
}
