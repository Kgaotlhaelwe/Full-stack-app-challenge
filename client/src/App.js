import React, { useState, useEffect, Component } from 'react';
import * as moment from 'moment';
import Modal from 'react-bootstrap/Modal'
import logo from './logo.svg';
import './App.css';

function App() {
  const [latestblockchain, setData] = useState([]);
  const [details, setDatas] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/blockchainlist")
      .then(response => response.json())
      .then(data => {
        // console.log(data.data.blocks)
        //console.log(data.data.blocks)
        setData(data.data.blocks)
      });

      fetch("/details")
      .then(response => response.json())
      .then(data => {
         console.log(data.data)
      
        setDatas(data.data)
      });



  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <button  onClick={handleShow}>View Details </button>
              </tr>
            )
          }
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">FEE</th>
            <th scope="col">Size</th>
            <th scope="col">BIT</th>
            <th scope="col">WEIGHT</th>
          </tr>
        </thead>
        <tbody>
      
        <tr>
          <td>{details.fee}</td>
          <td>{details.size}</td>
          <td>{details.bits}</td>
          <td>{details.weight}</td>
        
        </tr>
        
        
        </tbody>
      </table>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

  
    </div>





  );
}

export default App;