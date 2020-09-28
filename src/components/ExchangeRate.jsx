import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid';

function ExchangeRate({exchangeData}) {
  return (
    <div className="news__exchange">
      {exchangeData.map(o => <span className="news__exchange-item" key={nanoid()}>{o.exchangeName} {o.currentRate} &#160; &#160;</span>)}
    </div>
  )
}

ExchangeRate.propTypes = {
  exchangeData: PropTypes.array,
}

export default ExchangeRate

