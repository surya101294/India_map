import { redirect } from 'next/navigation';
import React from 'react'

const ServerSide = () => {
    const session = false;
    if (!session) {
        redirect("/login");
      }
  return (
    <div>ServerSide</div>
  )
}

export default ServerSide