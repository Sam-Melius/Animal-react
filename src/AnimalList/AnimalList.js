import React from 'react';
import Animal from '../Animal/Animal';
import './AnimalList.css';

export default function AnimalList(props) {
  
  return (
    <div className="animal-list">
      {props.animals.map((animal, i) =>
        <Animal key={animal.name, i} animal={animal} />)}
    
    </div>
  );
}
