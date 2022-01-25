import React from 'react';

export default function Animal(props) {
  return <div className='animal'>
    {props.name},
    {props.type},
    {props.says},
    <img src={`./images/${props.type}.svg`} />

  </div>;
}

