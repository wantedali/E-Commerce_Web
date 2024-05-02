<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port=3000;
mongoose.connect('mongodb://localhost/mydatabase',{usenewurlpaaser:true,useUnifiedtopology:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{console.log('connection open')});
const itemSchema = new mongoose.Schema({
    name:String,
    description:String
});
const item=mongoose.model('item',itemSchema);
app.use(bodyParser.json());
app.get('/items',async(req,res)=>{const items=await item.find();res.json(items);});

app.post('/items',async(req,res)=>{
    const newItem=new item({name:req.body.name,description:req.body.description});
    await newItem.save();

    res.json(newItem);
}); //
=======
document.write("teez alii")
console.log("Hello world!");
console.log('tez ay 7ad')
>>>>>>> Atef's-branch
