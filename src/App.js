import React from "react"
import './App.css';
import Accordion from './component/Accordion';
import Search from "./component/Search"

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
  
    },
    {
      title:"What is Hook?",
      content: "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. This page provides an overview of Hooks for experienced React users."
    }
  
    ]



  return (
    <div className="container1">
      <br/>
       {/* <Accordion items={items}/> */}
       <Search />
    </div>
  );
}

export default App;
