import logo from './logo.svg';
import './App.css';
import TimerApp from './components/TimerApp';
import News from './components/News';
import { useState } from 'react';

function App() {
  // Create a State to store the selected category
  const [category,setCategory]=useState("general")
  return (
   <div className="App">
      <h1>News Application</h1>
      <button onClick={()=> setCategory("general")}>General</button>
      <button onClick={()=>setCategory("technology")}>Technology</button>
      <button onClick={()=>setCategory("sports")}>Sports</button>
      <News category={category}/>
   </div>
  );
}

export default App;
