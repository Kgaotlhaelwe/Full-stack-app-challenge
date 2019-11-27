const express = require('express')
const app = express() ;
const cors  = require('cors');
const axios = require('axios');
var bodyParser = require('body-parser');
const path = require('path');
app.use(express.json())
app.use(cors()) ;
app.use(bodyParser.urlencoded({ extended: false })) ;
app.use(bodyParser.json())
app.get('/', async (req, res)=> {

const response = await  axios.get("https://blockchain.info/blocks?format=json") ;

res.json({data:response.data})

})

app.get('/details' , async (req , res)=>{

const response = await  axios.get('https://blockchain.info/rawblock/00000000000000000005460cbbded42778579db4ee0066a1b7052615024271f7') ; 
 res.json({data:response.data})
    
})


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

 