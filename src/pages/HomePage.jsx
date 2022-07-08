import React from 'react'
import { Link } from "react-router-dom";
const userId = 'kojko';

const HomePage = () => {
  return (
    <div>
      <h1>App</h1>
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  )
}

export default HomePage