let express = require('express');
let path = require('path');
let app = express();
let CONTRY;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
  
})

app.get('/go',(req,res) => {
  CONTRY = req.query.contry;
  res.sendFile(path.join(__dirname,'/public/main.html'))
})

app.get('/go/getcontry' , (req,res) => {
  res.json({contry : CONTRY})
})
app.listen(3000,()=>{
  console.log("3000 go");
})