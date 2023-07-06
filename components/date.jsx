import React from 'react'
import { parseISO, format, parse } from 'date-fns'
import utilStyles  from "/styles/util.module.css"

const Date = ({dateString}) => {
  const date = parseISO(dateString);
  return (
    <time className={utilStyles.date} dateTime={dateString} >{format(date,'LLL d, yyyy')}</time>
  )
}

export default Date