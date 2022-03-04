import React, { Component } from 'react'

export default class BadgeForm extends Component {

  handleInput = (e) => {
    console.log({e: e.target.value})
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitter
    } = this.props.formValues
    return (
      <div  className="container">
        <h1>{this.props.update ? 'Update' : 'New'}  Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="firstName">First Name</label>
            <input 
              onChange={this.props.handleChange} 
              className="form-control" 
              id="firstName" 
              type="text" 
              name="firstName"
              value={firstName}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" htmlFor="lasstName">Last Name</label>
            <input 
              onChange={this.props.handleChange} 
              className="form-control" 
              id="lasstName" 
              type="text" 
              name="lastName"
              value={lastName}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              onChange={this.props.handleChange} 
              className="form-control" 
              id="email" 
              type="email" 
              name="email"
              value={email}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" htmlFor="jobTitle">Job title</label>
            <input 
              onChange={this.props.handleChange} 
              className="form-control" 
              id="jobTitle" 
              type="text" 
              name="jobTitle"
              value={jobTitle}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" htmlFor="twtiter">Twitter</label>
            <input 
              onChange={this.props.handleChange} 
              className="form-control" 
              id="twitter" 
              type="text" 
              name="twitter"
              value={twitter}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {this.props.update ? 'Update' : 'Save'}
          </button>
        </form>
      </div>
    )
  }
}
