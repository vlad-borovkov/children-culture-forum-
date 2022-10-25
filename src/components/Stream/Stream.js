import React from 'react';
import StreamItem from './StreamItem';
import Literature from '../../images/stream_logo/Literature.svg';
import Dance from '../../images/stream_logo/Dance.svg';
import Teatre from '../../images/stream_logo/Teatre.svg';
import Art from '../../images/stream_logo/Art.svg';
import Museum from '../../images/stream_logo/Museum.svg';
import Animation from '../../images/stream_logo/Animation.svg';

export default function Stream() {
  return (
    <>
      <section id='streams' className='stream-section'>
        <h2 className='section-title'>Направления Форума</h2>
        <p className='section-subtitle'>
          Найди своё и прими в нём участие. <br />
          Места ограничены
        </p>
        <ul className='stream-list'>
          <StreamItem
            streamLogo={Literature}
            streamName='Литературное творчество и библиотеки'
            description='Творческие встречи и мастер-классы с писателями Юрием Нечипоренко (г. Москва), Геннадием Прашкевичем и поэтом Юрием Татаренко, а также литературный квартирник. Встречи пройдут в трёх государственных библиотеках Новосибирской области: научной, молодежной и детской.'
          />
          <StreamItem
            justifyType={'stream__item_right'}
            streamLogo={Dance}
            streamName='Танец, хореография'
            description='Студенты Новосибирского областного колледжа культуры и искусств представят лучшие номера в большой концертной программе, посвящённой бальным и народным танцам, джаз-танцу.'
          />
          <StreamItem
            streamLogo={Teatre}
            streamName='Театральное искусство и кино'
            description='Режиссерская мастерская для детей и подростков с актрисой театра и кино, продюсером Евгенией Турковой (г. Москва), а также мастер-класс, дискуссия, читка пьес, интерактивная программа «Любите ли вы театр. Как любим его мы?».'
          />
          <StreamItem
            justifyType={'stream__item_right'}
            streamLogo={Art}
            streamName='Изобразительное искусство'
            description='Участников ждут встречи с известными новосибирскими графиками и живописцами: М. В. Паршиковым, С. С. Мосиенко. В программе авторская интерактивная лекция «100 лет русскому плакату», творческие встречи, в том числе в мастерской художника, и мастер-классы по разным художественным техникам.'
          />
          <StreamItem
            streamLogo={Museum}
            streamName='Музеи'
            description='Комплекс мероприятий в диалогово-проектном режиме: лекция-диалог, экскурсии, публичные и практические сессии на темы: «Современный музей», «Музей для людей – создание выставочных проектов», «Музей будущего» с Мартой Яраловой (г. Москва).'
          />
          <StreamItem
            justifyType={'stream__item_right'}
            streamLogo={Animation}
            streamName='Анимация'
            description='Гости узнают о видах и техниках анимации, как развивается это направление,  и какие технологии создания анимации существуют сейчас. На мастер-классе участники разберут основные принципы создания анимации на основе готовой иллюстрации в программе After Effects.'
          />
        </ul>
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
    </>
  );
}
