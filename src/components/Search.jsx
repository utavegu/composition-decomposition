import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid';

function Search({searchCategoriesData}) {
  return (
    <div>
      <ul className="search__list">
        {searchCategoriesData.map(o => <li key={nanoid()} className="search__item"><a href="#">{o}</a></li>)}
      </ul>
      <input className="search__field" type="text"/>
      <button>Найти</button>
      <p>Чего будем искать сегодня, человек?</p>
    </div>
  )
}

Search.propTypes = {
  searchCategoriesData: PropTypes.array,
}

export default Search

