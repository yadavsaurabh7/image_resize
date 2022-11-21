const express = require('express')
const client = require('./config/elasticSearch')
var bodyParser = require('body-parser')
var  {connect} = require('./config/database');
const app = express()
const port = 3000
connect().then(res=>console.log('connected database successfully')).catch((err)=>console.log(err.message))
app.use(bodyParser.json());
app.use( process.env.NODE_ENV==='development'?'/dev/':'/', require('./routes'));

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
 //   server.close(() => process.exit(1))
  })
  
app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    res.status(404).send('sorry cant find that');
})

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('something broke');
})
app.listen(port,()=>{
    
    console.log('Express app has been started')
})



