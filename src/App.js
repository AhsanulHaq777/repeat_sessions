import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyChild from './child'
import TodayWeather from './weather'

function App() {
  
  let [count,setCount] = useState(0);
  let [weather,setWeather] = useState(true); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Let's repeat all the sessions.
        </h1>

        <MyChild childname='smart kid'  counter={count}/>
        <button onClick={()=> setCount(count + 1)}>Update Counter</button>
        <div className={`hot ${weather ? 'its-hot' : 'its-cold'}`}>
          <TodayWeather checkweather={weather ? 'Hot' : 'Cold'}/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
