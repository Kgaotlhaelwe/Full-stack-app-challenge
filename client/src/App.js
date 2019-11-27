import React , {useState , useEffect ,  Component } from 'react' ;

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [details, setDatas] = useState([]);

  useEffect(() => {
    fetch("/blockchainlist")
      .then(response => response.json())
      .then(data =>{
       // console.log(data.data.blocks)
        //console.log(data.data.blocks)
        setData(data.data.blocks) 
      });

      

  })
  
  return (
    <div >
   <div class="container">
<table class="w3-table-all  w3-centered mt-5">
  <tr>
      <th >Height</th>
      <th class="pl-8">Hash</th>
      <th >Time</th>
      </tr>
  {
        data.map(el =>
          <tr>
      
          <td>{el.height}</td>
          <td>{el.hash}</td>
          <td>{el.time}</td>
        </tr>
          )
    }
   
   </table>
</div>


    </div>
  );
}

export default App;