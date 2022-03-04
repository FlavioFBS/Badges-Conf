import React from 'react'
import { Link } from 'react-router-dom'

import astronaust from '../images/astronauts.svg'
import platziConf from '../images/platziconf-logo.svg'
import './styles/HomeScree.css'

export const HomeScreen = () => {
  return (
    <>
      <div className="Home__container">
        <div className="Home__content">
          <div className="Home__container-text">
            <img src={platziConf} alt="PlatziConf-Logo" />
            <h1>
              PRINT YOUR BADGES
            </h1>
            <span>
              The easiest way to manage your conference
            </span>
            <br />
            <br />
            <Link to="/badges/" className="btn btn-primary">Start now</Link>

          </div>
          <div className="Home__container-astronauts">
            <img src={astronaust} alt="Astronauts" />
          </div>
        </div>
      </div>
    </>
  )
}
