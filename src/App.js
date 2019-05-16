import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import ReservationsContainer from './ReservationsContainer'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
  }


  componentDidMount() {
    this.getReservations()
  }

  getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(results => this.setState({reservations: results}))
  }

  addReservation = (reservation) => {

    const url = 'http://localhost:3001/api/v1/reservations'
    const options = {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({name: reservation.name, date: reservation.date, time: reservation.time, number: reservation.number})
    }
    console.log(options)
    fetch(url, options)
      .then(response => response.json())
      .then(results => this.getReservations())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
