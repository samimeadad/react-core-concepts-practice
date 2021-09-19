import logo from './logo.svg';
import './App.css';

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
  const [] = useState();
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
    console.log( 'button clicked' );
  }

  return (
    <div style={myComponentStyle}>
      <h1>Brand: {props.brand}</h1>
      <h4>Price: {props.price}, I have points: </h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{color: 'magenta', fontWeight: 'bold'}}>I can create my own component</p>
    </div>
  );
}

export default App;
