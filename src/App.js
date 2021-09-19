import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App () {
  return (
    <div className="App">
      <MyComponent brand="Apple" price="50000"></MyComponent>
      <MyComponent brand="Microsoft" price="5000"></MyComponent>
      <MyComponent brand="Google" price="1500"></MyComponent>
      <MyComponent brand="Facebook" price="150000"></MyComponent>
      <MyComponent brand="Intel" price="500000"></MyComponent>
    </div>
  );
}

function MyComponent ( props ) {
  const [ points, setPoints ] = useState( 1 );
  const [ counter, setCounter ] = useState( 0 );
  const myComponentStyle = {
    backgroundColor: 'floralwhite',
    margin: 'auto',
    marginTop: '20px',
    padding: '20px',
    border: '3px solid blue',
    borderRadius: '20px',
    width: '50%',
  };

  const handleAddPoints = () => {
    const newPoints = points * 2;
    const newCounter = counter + 1;
    setPoints( newPoints );
    setCounter( newCounter );
  }

  return (
    <div style={myComponentStyle}>
      <h1>Brand: {props.brand}</h1>
      <h4>Price: {props.price}</h4>
      <h3>My Points: {points}</h3>
      <h4>Click Counter: {counter}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{color: 'magenta', fontWeight: 'bold'}}>I can create my own component</p>
    </div>
  );
}

export default App;