import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid';

/** Компонент с новостями */
function News({newsData}) {
  let currentDate = new Date();
  let Year = currentDate.getFullYear();
  let Month = currentDate.getMonth();
  let Day = currentDate.getDate();

  return (
    <React.Fragment>
      <div className="news__control">
        <ul className="news__list">
          {newsData.categories.map(o => <li key={nanoid()}><button>{o}</button></li>)}
        </ul>
        <time className="news__date">{`${Day}.${Month+1}.${Year}`}</time>
      </div>
      <div className="news__display">
        {newsData.headlines.map((o, i) => <article key={nanoid()}><a href={newsData.link[i]}>{o}</a></article>)}
        {/* Запоздало сообразил, что напарил с архитектурой данных, но так как нашёл выход из положения, то переделывать не стал */}
        {/* Ну и да, каждую новость можно было также сделать отдельным компонентом, но слишком сильно я решил не дробить */}
      </div>
    </React.Fragment>
  )
}

News.propTypes = {
  newsData: PropTypes.object.isRequired,
}

export default News

