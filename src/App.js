import React,{useState}from 'react';
import './App.css';
import {arry1} from "./components/List"

function App() {
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <>
    <div className="App">
   <h1>FILTER APP</h1>
   <div>
    <input type="text" placeholder="SEARCH...." onChange={e=> setSearch(e.target.value)}/>
   </div>
    </div>
    {arry1.filter((m) =>
    m.firstName.toLowerCase().includes(search) ||
    m.firstName.toUpperCase().includes(search) ||
    m.lastName.toLowerCase().includes(search) ||
    m.lastName.toUpperCase().includes(search)
    ).map((m) =>(
      <div key={m.id} className="table">
      <p>{m.firstName}</p>
      <p>{m.lastName}</p>
      </div>
))}
    </>
  );
}

export default App;