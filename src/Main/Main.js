import React from 'react';
import AnimalList from '../AnimalList';
import backgroundImg from '../background.png';
import './Main.css';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroudImg})` }}>

      {/* {props.animals.map{{animal, i} => 
        AnimalList key={animal.name, i} name={animal.name} />
        }} */}

    </main>
  );
}
