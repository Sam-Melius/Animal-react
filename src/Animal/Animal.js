import React from 'react';

export default function Animal(props) {
  return (
    <div className='animal'>
      <p>This is {props.animal.name} and 
      
        they say: {props.animal.says}</p>,
      <img src={`./animals/${props.animal.type}.svg`} />
      Type of animal: {props.animal.type}

    </div>
  );
}

