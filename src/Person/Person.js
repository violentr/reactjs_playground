import React from 'react';

const person = (props) => {
  return(
    <div>
      <p onClick={props.click}> I'am a person {props.name}, I am {props.age} years old</p>
      <div> {props.children} </div>
      <input onChange={props.changed} value={props.name} type="text"/>
    </div>
  )
}

export default person;