// const objectConvertor=
// {
// name : "Ajit Kumar ",
// age : 24
// }
// const json=JSON.stringify(objectConvertor);
// console.log(json);
// console.log(typeof json);
const express=require("express");
const app=express();
const mongoose=require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/")
// const db=require('./db');
// app.get('/chicken',function(req,res)
// {
    //     res.send("i can serve chicken as well ");
    // })
    // app.get('/idili',function(req,res)
// {
//     var customized_idili =
//     {
    //         name : "rava idili",
//         size : "10cm diameter",
//         is_sambhar : true,
//         is_chutney : false

//     }
//     res.send(customized_idili);
// })
// app.post('/items',(req,res)=>
    // {
//     res.send("hi supply my items");
//     console.log("this is my items");
// })
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res)
{
    res.send("Hello, I am Ajit Kumar ");
})
const menuroutes=require("./routes/menuroutes");
 app.use('/menu',menuroutes);
            
 const personroutes=require("./routes/personroutes");
 app.use('/person',personroutes);
app.listen(5000,()=>{
    console.log("server local host is 5000 ")
});