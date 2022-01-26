import React from 'react';
import AnimalList from '../AnimalList/AnimalList.js';
import backgroundImg from '../background.png';
import './Main.css';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>

      { 
        <AnimalList animals = { props.animals } />
      }

    </main>
  );
}
