import React from 'react'
import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import { Gravatar } from './Gravatar';

class Badge extends React.Component {
  
  render() {
    const { firstName, lastName, jobTitle, twitter, email } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar email={email}/>
          <h1>{firstName} <br /> {lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">
          #Academyconf
        </div>

      </div>
    )
  }
}

export default Badge;