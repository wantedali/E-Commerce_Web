/*const express = require('express');
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
}); */

const port=4000;

const express = require('express');
const app = express();
const mongoose= require('mongoose');
const jwt= require('jsonwebtoken');
const multer= require('multer');
const path= require('path');
const cors=require('cors');
app.use(express.json());
app.use(cors());

// Database connection with mongoDB
mongoose.connect("mongodb+srv://wantedali:alikhaled1234@cluster0.3asplb3.mongodb.net/e-commerce")

// API Creation 
app.get('/', (req, res) => {
    res.send("Express app is running")

})
app.listen(port,(error)=>{
    if(!error) {
        console.log(`Server is running on port ${port}`);
    }else{
        console.log("Error: "+error);
    }
})