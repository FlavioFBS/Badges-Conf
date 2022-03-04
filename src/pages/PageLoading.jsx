import React from 'react'

import loading from '../assets/lottie/chicken_walk.json'
import Lottie from 'lottie-react'
// const defaultOptions = {
//   loop: true,
//   autoplat: true,
//   rendereSettings: {
//     preverAspectRatio: 'xMidYMid slice'
//   }
//   // animationData: loading
// }

export const PageLoading = () => {

  // let animLoading = {
  //   container: document.getElementById('lottie_loading'), // Required
  //   path: loading, // Required
  //   renderer: 'svg/canvas/html', // Required
  //   loop: true, // Optional
  //   autoplay: true, // Optional
  //   name: "Loading", // Name for future reference. Optional.
  // }
  return (
    <div style={loadingStyle} id="lottie_loading" className="">
      <Lottie animationData={loading}  />
    </div>
  )
}

const loadingStyle = {
  width: 150,
  heigth: 150,
  margin: 'auto'
}