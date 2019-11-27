import React , {useState , useEffect ,  Component } from 'react' ;

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [details, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(response => response.json())
      .then(data =>{
       // console.log(data.data.blocks)
        //console.log(data.data.blocks)
        setData(data.data.blocks) 
      });

      fetch("http://localhost:5000/details")
      .then(response => response.json())
      .then(data =>{
        console.log(data.data)
        console.log(data.data.data)
        //setData(data.data.blocks) 
      });

  })
  
  return (

    <div>
      fedrfrerferfewfwe
    </div>
  ) ;
}

export default App;