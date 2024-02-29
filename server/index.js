const express  = require("express");
const app = express();
const cors = require("cors");
const comments = require('./data')

const PORT = 9000;
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
    console.log('data',comments)
})


var people = [`ahil`,'nadeem','asif','akash','moulsab']
app.get('/api/home',(req,res)=>{
    res.send({message:'Hello Ahil',people:people})
})

app.get('/api/names',(req,res)=>{
    res.send({people:people})
})

app.post('/api/names',(req,res)=>{
    const name = req.body.name;
    res.send({people:people})
    people.push(name);
    res.status(201).json({message:'name added succesfully ', name:name});
})

app.get('/api/comments',(req,res)=>{
    res.send({comments:comments})
})