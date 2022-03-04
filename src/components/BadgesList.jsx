import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgesListItem } from './BadgesListItem'
import Skeleton from './Skeleton'

import './styles/BadgesList.css'
import './styles/Skeleton.css'

function useSearchBadges(badges) {
  const [query, setQuery] = useState('')
  const [filterResults, setFilterResults] = useState(badges)

  useMemo(() => {
    const results = badges.filter(badge => 
      `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    setFilterResults(results)
  }, [badges, query])

  return {query, setQuery, filterResults}
}

export const BadgesList = (props) => {
  console.log({
    lista_loading: props
  })
  
  const badges = props.badges;
  
  const {query, setQuery, filterResults} = useSearchBadges(badges)
   


  if (props.loading) {
    // const arrayFill = "12345".split('')
    // return arrayFill.forEach(e => (
    //   <Skeleton key={e} /> 
    // ))
    return (
      <div className="">
        <Skeleton/> 
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </div>

    )
    
  } else if (filterResults.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter badges</label>
          <input 
            type="text" 
            className="form-control" 
            value={query} 
            onChange={(e) =>setQuery(e.target.value)} 
          />
        </div>
        <h3>No badges were found</h3>
        <h1>{props.loading} -------</h1>
        <Link to="/badges/new" className="btn brn-primary">
          Create a badge!
        </Link>
      </div>
    )
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter badges</label>
        <input 
          type="text" 
          className="form-control" 
          value={query} 
          onChange={(e) =>setQuery(e.target.value)} 
        />
      </div>
      <ul className="list-unstyled BadgesList__container-list row">
        {
          filterResults.map(badge => (
            <li key={badge.id} className="col">
              <div className="BadgesList__container">
                <Link to={`/badges/${badge.id}`}>Update</Link>
                <BadgesListItem badge={badge}/>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
  
}
