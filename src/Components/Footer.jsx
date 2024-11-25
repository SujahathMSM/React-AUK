import React from 'react'
// const myObject = {
//     name: "Sujahath",
//     age: "26",
//     city: "Beruwala"
// }
const Footer = ({name, age, city, job, langauge}) => {
    // const {city} = myObject;  // object destructuring
  return (
    <div className='boxes'>
      <ul>
        <li>Name: {name}</li>
        <li>Language: {langauge}</li>
        <li>Job: {job}</li>
        <li>Age: {age}</li>
        <li>City: {city}</li>
      </ul>
    </div>
  )
}

export default Footer
