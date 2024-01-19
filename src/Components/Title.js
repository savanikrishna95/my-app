import React, { useEffect } from 'react'

function Title({callbackFunc}) {
  console.log('Rendering Title')
  useEffect(()=>{
    setTimeout( () => {
      callbackFunc("hey new data");
    },1000)
  },[callbackFunc])
  return (
    
    <h2>
      useCallback Hook
    </h2>
  )
}

export default React.memo(Title)