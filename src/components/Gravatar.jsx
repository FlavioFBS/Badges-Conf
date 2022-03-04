import React from 'react'
import md5 from 'md5'
export const Gravatar = ({email}) => {
  const hash = md5(email)
  return (
    // gravatarImg="https://www.gravatar.com/avatar?d=identicon"
    <img 
      className="Badge__avatar"
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} 
      alt="Avatar" />
      
  )
}
