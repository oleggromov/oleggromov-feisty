import React from 'react'

const formatDate = str =>
  new Date(str).toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric'  })

const FormattedDate = ({ date }) => {
  return <span>{formatDate(date)}</span>
}

export default FormattedDate
