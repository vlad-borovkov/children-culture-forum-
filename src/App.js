import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/header/Header';
import PopupMenu from './components/PopupMenu/PopupMenu';
import EventDetails from './components/event-detail/EventDetails';
import Speakers from './components/Speakers/Speakers';
import Map from './components/Map/Map';
import Organization from './components/Organization/Organization';
import Footer from './components/Footer/Footer';
import Stream from './components/Stream/Stream';

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenuClick() {
    setOpenMenu(true);
  }
  function closeAllPopups() {
    setOpenMenu(false);
  }
  return (
    <BrowserRouter>
      <div className='page'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Дети в культуре Сибири</title>
          <link rel='canonical' href='http://детивкультуресибири.рф' />
          <meta
            name='description'
            content='Детский культурный форум в Сибири'
          />
        </Helmet>
        <Header handleMenuClick={handleMenuClick} />
        <EventDetails />
        <Speakers />
        <Stream />
        <Map />
        <Organization />
        <Footer />
        <PopupMenu handleCloseMenu={closeAllPopups} isOpenMenu={isOpenMenu} />
      </div>
    </BrowserRouter>
  );
}

export default App;
