import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/example';
import Welcome from './components/example_class';
import Counter from './components/counter';
import Marks from './components/marks';
import Form from './components/form';
import Newcounter from './components/newCounter';
import Clock from './components/clock';
import Display from './display';
import CounterContext from './countercontext';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Clock/>
        <Welcome name="ssb"/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Newcounter/>
      {/* <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Hello name="ssb"/>
      <Marks/>
      <Form/>
      <CounterContext.Provider value={{count, setCount}}>
      <Display/>
      </CounterContext.Provider>
    </>
  )
}

export default App
