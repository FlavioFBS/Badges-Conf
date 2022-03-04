import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import { DeleteBageModal } from '../components/DeleteBageModal';

import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css'

function useIncreaseCount(max) {
  const [count, setCount] = useState(0)

  if (count > max) {
    setCount(0)
  }
  return [count, setCount]
}

export const BadgeDetails = (props) => {
  const {firstName, lastName, jobTitle, twitter, email, id} = props.badge

  const [count, setCount] = useIncreaseCount(10)
  return (
    <>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Conferences Logo" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{firstName} {lastName}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                  firstName={firstName} 
                  lastName={lastName}
                  jobTitle={jobTitle}
                  twitter={twitter}
                  email={email}
                />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div className="mb-4">
                  <button onClick={()=>setCount(count+1) } className="btn btn-primary">
                    Increase count: {count}
                  </button>
                  <Link className="btn btn-primary" to={`/badges/${id}/edit`}>Edit</Link>
                </div>

                <div className="">
                  <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                  
                  <DeleteBageModal
                    onDeleteBadge={props.onDeleteBadge}
                    modalIsOpen={props.modalIsOpen} 
                    onClose={props.onCloseModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
