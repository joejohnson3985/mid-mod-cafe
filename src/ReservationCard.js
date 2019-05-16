import React from 'react'
import './ReservationCard.css';

const ReservationCard = ({reservation}) => {

  const { name, date, time, number } = reservation

  return(
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests:{number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default ReservationCard