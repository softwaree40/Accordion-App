import React from "react"
import './App.css';
import Accordion from './component/Accordion';

function App() {

  const items = [
    {id:1,
    title: "What is React?",
    content:"React is a front end javaScript framework"
    },
    {
      id:2,
      title:"Why using React?",
     content: "React is a favorite JS library among engineers"
    },
    {
      id:3,
     title: "How do you  use React?",
     content: "You use React by creating Components"
  
    }
  
    ]



  return (
    <div className="App">
       <Accordion items={items}/>
    </div>
  );
}

export default App;
