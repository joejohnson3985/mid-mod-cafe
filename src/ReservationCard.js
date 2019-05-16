import React from 'react'
import './ReservationCard.css';

const ReservationCard = ({reservation}) => {

  const { name, date, time, number } = reservation

  return(
    <div className='card'>
      <h4>{name}</h4>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests:{number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default ReservationCard