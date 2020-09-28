import React from 'react';
import './App.css';
import News from './components/News';
import ExchangeRate from './components/ExchangeRate';
import Longread from './components/Longread';
import Search from './components/Search';
import Banner from './components/Banner';
import Applet from './components/Applet';
import {newsData, exchangeData, longreadData, appletsData, searchCategoriesData} from './data';

function App() {
  const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstChild.innerHTML;
  };

  const test = createElement(appletsData[0].uniqueMarkup);
  console.log(test);

  return (
    <div className="container">
      <section className="news">
        <News newsData={newsData} />
        <ExchangeRate exchangeData={exchangeData} />
      </section>
      <section className="longread">
        <Longread {...longreadData} />
        {/* Показываю, что лекцию слушал и так тоже умею */}
      </section>
      <section className="search">
        <Search searchCategoriesData={searchCategoriesData} />
      </section>
      <section className="advertisement">
        <Banner />
      </section>
      <section className="applets">
        <Applet appletsData={appletsData[0]}>
          <div>
            <span>Днём: +{Math.round(Math.random(10)*10+1)}</span>
            <br />
            <span>Ночью: -{Math.round(Math.random(10)*10+1)}</span>
          </div>
        </Applet>
        <Applet appletsData={appletsData[1]}>
          <ul>
            <li>21:00 "Телепузики", развивающая передача</li>
            <li>23:00 "Зеленый слоник", Х/ф, Россия, 1999г</li>
            <li>01:00 "Гей-порно с карликами-трансгендерами", Европа</li>
          </ul>
        </Applet>
        <Applet appletsData={appletsData[2]}>
          <h5>Будни</h5>
          <ul>
            <li>Кукуево - Мытищи, 2ч., 14:05</li>
            <li>Москва - Берлин - Амстердам, 14ч., 15:20</li>
            <li>Морской вокзал - Шереметьево, 1ч., 16:15</li>
            <li>Экскурсионный тур, 6ч., 08:30</li>
          </ul>
        </Applet>
      </section>
    </div>
  )
}

export default App;
