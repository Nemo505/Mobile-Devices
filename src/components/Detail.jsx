import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    const location = useLocation();

  return (
    <div>
        {location.state.productId}
    </div>
  )
}

export default Detail