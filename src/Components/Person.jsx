import React from 'react'

const Person = ({name, position, city}) => {
  return (
    <div className='userbox'>
      <ul>
        <li>Name: {name}</li>
        <li>Position: {position}</li>
        <li>City: {city}</li>
      </ul>
    </div>
  )
}

export default Person
