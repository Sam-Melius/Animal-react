import React from 'react';

export default function Animal(props) {
  return (
    <div className='animal'>
      {props.animal.name},
      {props.animal.type},
      {props.animal.says},
      <img src={`./images/${props.type}.svg`} />

    </div>
  );
}

