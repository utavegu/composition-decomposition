import React from 'react'
import PropTypes from 'prop-types'

function Applet(props) {
  const {heading, description} = props.appletsData;

  return (
    <div className="applets__item">
      <h4 className="applets__header">{heading}</h4>
      <p className="applets__content">{description}</p>
      <div>{props.children}</div>
    </div>
  )
}

Applet.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default Applet

