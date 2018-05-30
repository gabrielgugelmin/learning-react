import React from 'react'

const validationComponent = (prop) => {
  return (
    <small>
      {prop.textLength < 5 ? 'Text too short' : 'Text long enough'}
    </small>
  )
}

export default validationComponent;