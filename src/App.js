import React, { Component } from 'react';
import './App.css';
import Form from './Form'

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
    const newReservation = {...reservation, number: Number(reservation.number)}
    console.log(newReservation)
    const url = 'http://localhost:3001/api/v1/reservations'
    const options = {
      method: 'POST',
      body: JSON.stringify(reservation),
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
          
        </div>
      </div>
    )
  }
}

export default App;
