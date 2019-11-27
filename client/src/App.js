import React, { useState, useEffect, Component } from 'react';
import * as moment from 'moment';
import logo from './logo.svg';
import './App.css';

function App() {
  const [latestblockchain, setData] = useState([]);
  const [details, setDatas] = useState([]);

  useEffect(() => {
    fetch("/blockchainlist")
      .then(response => response.json())
      .then(data => {
        // console.log(data.data.blocks)
        //console.log(data.data.blocks)
        setData(data.data.blocks)
      });



  })

  return (

    <div class="container">

      <h3 class="text-center">Latest block chain</h3>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Height</th>
            <th scope="col">Hash</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {
            latestblockchain.map(el =>
              <tr>
                <td>{el.height}</td>
                <td>{el.hash.substring(0, 25)}</td>
                <td>{moment(el.time).format('ll')}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>





  );
}

export default App;