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

// Image storage Engine
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    } 
})
const upload=multer({storage:storage})
app.subscribe('/images',express.static('uploads/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json(
        {
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
        }
    )

})

const Product = mongoose.model('Product',{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true ,  
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
}) 

// api add product
app.post('/addproduct', async (req, res) => {
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:1,
        name:req.body.name,
    });
}
)
// api remove product
app.post('/removeproduct',async (req,res) =>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:1,
        name:req.body.name,
    })
})
// api show all products
app.get('/allproducts', async (req,res)=>{
    let products=await Product.find({});
    console.log("All products fetched");
    res.send(products);
})
app.listen(port,(error)=>{
    if(!error) {
        console.log(`Server is running on port ${port}`);
    }else{
        console.log("Error: "+error);
    }
})