import React, { Component } from 'react'
import { Gravatar } from './Gravatar'

export class BadgesListItem extends Component {

  render() {
    const { email, firstName, lastName, jobTitle, twitter } = this.props.badge
    return (
        <>
          <Gravatar email={email}/>
          <div className="BadgesList__text-container">
            Nombre: {firstName} {lastName}<br />
            Profesión: {jobTitle} <br />
            <span className="twitter">
              @{twitter }
            </span>
          </div>
        </>   
    )
  }
}
