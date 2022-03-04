import React from 'react'

import lottie_error from '../assets/lottie/lottie_error.json'
// import lottie_error from '../assets/lottie/lottie_error_500.json'
import Lottie from 'lottie-react'

export const ErrorLoading = () => {

  return (
    <div style={loadingStyle} id="lottie_loading" className="">
      <Lottie animationData={lottie_error}  />
      {this.props.message &&
       <p>{this.props.message}</p>}
    </div>
  )
}

const loadingStyle = {
  width: 550,
  heigth: 550,
  margin: 'auto',
  marginTop: 50,
  // backgroundColor: 'black'
}