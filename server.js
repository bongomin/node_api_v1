const express = require('express');
const MongoClient = require('mongodb').MongoCleint;
const bodyParser = require('body-parser');
const db = require('./config/db');


const  app = express();
const port= 3001;

app.use(bodyParser.urlencoded({ extended:true }))








MongoClient.connect(db.url,(err,database)=>{ 
  if(err) return console.log(err)
  require('./app/routes')(app,database);
  app.listen(port,()=>{
    console.log('port runing on port:'+port);
  });

  
})