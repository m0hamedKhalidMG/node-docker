const express = require("express");
const mongoose=require("mongoose")
const os=require("os")

const app =express();
const port=process.env.port||5000;
const host='0.0.0.0'
const USER_DB='root'
const PASS_DB='example'
const HOST_DB='mongo'
const PORT_DB='27017'
mongoose.connect(`mongodb://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}`).then(()=>console.log("connect to db ..."))
.catch((err)=>console.log("fail to coonect to db",err))

app.listen(port,host,()=>{

    console.log("start",port);

});
app.get('/', (req, res) => {
  console.log(os.hostname())
    res.send('<h1>Hebnn</h1>')
  });
  app.get('/home',(req,res)=>{


    res.send("<h1>mohamed</h1>")
  })