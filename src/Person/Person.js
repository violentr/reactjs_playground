import React from 'react';

const person = (props) => {
  return(
    <div>
      <p> I'am a person {props.name}, I am {props.age} years old</p>
      <div> {props.children} </div>
    </div>
  )
}

export default person;