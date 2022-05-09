import React from 'react'

export default function propsPedroTech({firstname, lastname, email}) {
  return (
    <div>
      <h2>First Name: {firstname}</h2>
      <h2>Last Name: {lastname}</h2>
      <h2>Email: {email}</h2>
      <hr></hr>
    </div>
  )
}
