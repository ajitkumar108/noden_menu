const mongoose=require("mongoose");
const { type } = require("os");
const menuitemSchema=new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    price:{
        type :String,
        required :true
    },
    taste :{
        type :String,
        enum: ["sweet","spicy","sour"],
        required : true
    },
    is_drink:{
        type :Boolean,
        default:false
    },
    ingredients:
    {
        type : [String],
        default:[]
    },
    sales :{
        type : Number,
        default:0
    }
})
const menu=mongoose.model("menu",menuitemSchema);
module.exports=menu;