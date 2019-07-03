const express = require('express');
const MongoClient = require('mongodb').MongoCleint;
const bodyParser = require('body-parser');


const  app = express();
const port= 3001;

app.use(bodyParser.urlencoded({ extended:true }))


require('./app/routes')(app,{});



app.listen(port,()=>{
  console.log('port runing on port:'+port);
});