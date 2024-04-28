const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/Ecommerce";
const connecttoMongoDb=()=>{
    mongoose.connect(url);
    if(mongoose.connection){
        console.log("Database connected successfully")
    }
}

module.exports=connecttoMongoDb;