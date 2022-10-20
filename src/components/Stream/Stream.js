import React from 'react';
import StreamItem from './StreamItem';
import Literature from '../../images/stream_logo/Literature.svg';
import Dance from '../../images/stream_logo/Dance.svg';
import Teatre from '../../images/stream_logo/Teatre.svg';
import Art from '../../images/stream_logo/Art.svg';
import Museum from '../../images/stream_logo/Museum.svg';
import Animation from '../../images/stream_logo/Animation.svg';
import Laboratory from '../../images/stream_logo/Laboratory.svg';

export default function Stream() {
  return (
    <>
      <section id='streams' className='stream-section'>
        <h2 className='section-title'>Направления Форума</h2>
        <p className='section-subtitle'>
          Найди своё и прими в нём участие. Места ограничены
        </p>
        <ul className='stream-list'>
          <StreamItem
            streamLogo={Literature}
            streamName='Литературное творчество и библиотеки'
            description='  Подробнее о направлении по объёму текста - 1-2 строчки.
                Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
          <StreamItem
            justifyType={'stream__item_right'}
            streamLogo={Dance}
            streamName='Танец и хореография'
            description='Подробнее о направлении по объёму текста - 1-2 строчки.
            Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
          <StreamItem
            streamLogo={Teatre}
            streamName='Театральное искусство и кино'
            description='  Подробнее о направлении по объёму текста - 1-2 строчки.
                Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
          <StreamItem
            justifyType={'stream__item_right'}
            streamLogo={Art}
            streamName='Изобразительное искусство'
            description='  Подробнее о направлении по объёму текста - 1-2 строчки.
                Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
          <StreamItem
            streamLogo={Museum}
            streamName='Музеи'
            description='  Подробнее о направлении по объёму текста - 1-2 строчки.
                Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
          <StreamItem
            justifyType={'stream__item_right'}
            streamLogo={Animation}
            streamName='Анимация'
            description='  Подробнее о направлении по объёму текста - 1-2 строчки.
                Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
          <StreamItem
            streamLogo={Laboratory}
            streamName='Творческая лаборатория'
            description='  Подробнее о направлении по объёму текста - 1-2 строчки.
                Подробнее о направлении по объёму текста - 1-2 строчки.'
          />
        </ul>
        <div className='stream-button__wrap'>
          <div className='stream-button__text-wrap'>
            <p className='stream-button__slogan'>Нашёл своё? Регистрируйся!</p>
            <p className='stream-button__disclamer'>Места ограничены</p>
          </div>
          <a href='http://www.maxlib.ru/' className='stream-button'>
            Стать участником
          </a>
        </div>
      </section>
    </>
  );
}
