import React from 'react'
import PortfolioPost from '../../../containers/portfolio-post'

export default ({ location, data }) => {
  const { previous, next } = data

  return (
    <PortfolioPost
      data={{ ...data }}
      location={location}
      previous={previous}
      next={next}
    />
  )
}
