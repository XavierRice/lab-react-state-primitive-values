import { useState } from 'react'
import React from "react";
import "./App.css";
import CurrentScore from './components/CurrentScore';
import PayButton from './components/PayButton';


function App () {
  const [count, setCount]=useState(0)

    return (
      <main>
        <p>React State Lab</p>
        <CurrentScore></CurrentScore>
        score
      </main>
    );
}

export default App;
