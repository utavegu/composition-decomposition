import React from 'react'
import PropTypes from 'prop-types'

function Longread({image, width, height, alternative, heading, description}) {
  return (
    <React.Fragment>
      <img src={image} alt={alternative} width={width} height={height} />
      <h3><a href="#">{heading}</a></h3>
      <p>{description}</p>
    </React.Fragment>
  )
}

Longread.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alternative: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default Longread

