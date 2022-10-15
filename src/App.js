import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/header/Header';
import EventDetails from './components/event-detail/EventDetails';

function App() {
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
        <Header />
        <EventDetails />
      </div>
    </BrowserRouter>
  );
}

export default App;
