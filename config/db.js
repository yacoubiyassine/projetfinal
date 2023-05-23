const mongoose=require('mongoose')
const connectDB=()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/fish")
        console.log("db is connect")
    } catch (error) {
       console.log("db is not connect") 
    }
}
module.exports=connectDB