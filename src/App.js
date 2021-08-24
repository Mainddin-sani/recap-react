import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let language = [
    {
      name: "Javascript", 
      library: "React"
    },
    {
      name: "PHP", 
      library: "Laravel"
    },
  ]
  return (
    <div className="App">
      {
        language.map((data, index)=> {
          return <Name key={index} useData={data}></Name>
        })
      }
      <NumberCount></NumberCount>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> 
    </div>
  );
}

function Name(props){
  return (
    <div>
      <div>{props.useData.name}</div>
      <div>{props.useData.library}</div>
    </div>
  )
}
function NumberCount() {
  const [Count, SetCount] = useState(0); 
  const countHandelar = ()=> SetCount(Count + 1)
  console.log(Count, SetCount);
  return (
    <div>
      <p>This is Number : {Count}</p>
      <button onClick={countHandelar}>Add Number</button>
      <StudentCount TotalStudent={Count + 1}></StudentCount>
    </div>
  )
}

function StudentCount(props) {
  return <h4>Total student : {props.TotalStudent}</h4>
}

export default App;
