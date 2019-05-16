import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: 0
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' type='text' value={this.state.name} placeholder='Name' onChange={this.handleChange}/>
        <input name='date' type='text' value={this.state.date} placeholder='Date (mm/dd)' onChange={this.handleChange}/>
        <input name='time' type='text' value={this.state.time} placeholder='Time' onChange={this.handleChange}/>
        <input name='numGuests' type='number' value={this.state.numGuests} placeholder='Number of guests' onChange={this.handleChange}/>
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form