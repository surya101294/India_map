import React from 'react'

const userName = ({params}:{params:{userName:string}}) => {
    console.log("params",params)
  return (
    <h1>UserName----------{params.userName}</h1>
  )
}

export default userName