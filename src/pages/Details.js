import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const {id}= useParams();
  console.log(id)
  return (
    <div>
      Detail
    </div>
  )
}

export default Details
