const express=require("express");
const router=express.Router();
const menu=require("./../models/menu");
router.post("/", async (req, res) => {
    try {
        // Create a new menu item
        const newMenuItem = new menu(req.body);
        const response = await newMenuItem.save();
        console.log("Data saved:", response);
        res.status(201).json(response);
    } catch (err) {
        console.error("Error saving data:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.get('/',async (req,res)=> {
    try {
        const data=await menu.find();
        // person.save();
        console.log("data fetched");
        res.status(200).json(data);
        
    } catch (err) {
        console.log("data error");
        res.status(500).json({error : "internal server error"});
    }       
    // this is for testing
})
module.exports=router;