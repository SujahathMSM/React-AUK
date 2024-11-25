import React from 'react'

const Tester = (props) => {
  return (
    <div className='tester'>
      <h1>Hello Guys</h1>
      {props.children}
    </div>
  )
}

export default Tester
