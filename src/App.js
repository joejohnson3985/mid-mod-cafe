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

  addReservation = ({ name, date, time, number }) => {
    const url = 'http://localhost:3001/api/v1/reservations'
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, date, time, number }),
      headers: {'Content-Type': 'applicaton/json'}
    }
    fetch(url, options)
      .then(response => response.json())
      .then(results => console.log(results))
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
