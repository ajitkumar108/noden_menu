const mongoose=require("mongoose");
// const mongoURL= 'mongodb://0.0.0.0:27017/hotels'
const mongoURL='mongodb://localhost:27017/'
mongoose.connect(mongoURL,
    {
        // useNewUrlParser :true,
        // useUnifiedTopology :true
    }
)
const db=mongoose.connection;
db.on("connected", ()=>{
        console.log("connection is set ");
});
db.on("error ",(err)=>{
    console.log("error in database",err);
});
db.on("disconnected",()=>
{
    console.log("database is disconnected");
});
module.exports=db;