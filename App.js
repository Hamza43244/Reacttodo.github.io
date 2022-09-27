import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './component/button';

function App() {
  let [txt, setTxt] = useState()
let [list, setlist] = useState([])

  let add = () => {
    if(!txt){
      alert("text required");
      return;
    }
    list.push(txt)
    console.log(list)
    setlist([...list])
    setTxt('')
  }
  let del = ({ id }) => {
    const todos = [...list];
    todos.splice(id, 1);
    setlist(todos);
  };
  let edit = () => {
    
  }

  let dellAll=() =>{
    setlist([])
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div>
        <input className='inp' value={txt} onChange={(e) => {
          setTxt(e.target.value);
          console.log(txt);
        
        }} />
        <button className='btn' onClick={() => add()}>Add</button>
        <button className='btn' onClick={dellAll}>Delete All</button>

       
   </div>
        <ul className='style'>
          {list.map((e,i)=>{
            return <li className='list' style={{
              color: "blue",
              backgroundColor:"white",
              paddingRight: 200,
            }} key={i}>{e}
            <button className='btn' onClick={ edit}>Edit</button>
            <button className='btn' onClick={ del}>Delete</button>
            </li>;

          })

          }
        </ul>
      </header>
    </div>
  );
}

export default App;
