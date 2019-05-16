import React from 'react' 
import ReservationCard from './ReservationCard'
import './ReservationsContainer.css'

const ReservationsContainer = ({reservations}) => {

  const displayReservations = reservations.map(reservation => <ReservationCard reservation={reservation} key={reservation.id}/>)

  return(
    <div className='container'>
      {displayReservations}
    </div>
  )
} 

export default ReservationsContainer