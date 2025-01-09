const express=require("express");
const router=express.Router();
const person=require('./../models/person');
router.post("/", async (req, res) => {
    try {
      const { Email } = req.body;
  
      // Check if the email already exists
      const existingPerson = await person.findOne({ Email });
      if (existingPerson) {
        return res.status(400).json({ error: "Email already exists" });
      }
  
      // Create a new person
      const newPerson = new person(req.body);
      const response = await newPerson.save();
      console.log("Data saved:", response);
      res.status(201).json(response);
    } catch (err) {
      console.error("Error saving data:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  router.get('/',async (req,res)=> {
      try {
          const data=await person.find();
          // person.save();
          console.log("data fetched");
          res.status(200).json(data);
          
        } catch (err) {
            console.log("data error");
            res.status(500).json({error : "internal server error"});
        }       
        
    })
    router.get('/:worktype',async(req,res)=>
        {
            try {
                const worktype=req.params.worktype;
                if(worktype=="chef"||worktype=="engineer"||worktype=="writer")
                    {
                        const response=await person.find({work:worktype});
                        console.log("data fetched");
                        res.status(404).json(response);
                    }
                } catch (err) {
                    console.log("data error");
                    res.status(500).json({error : "internal server error"});
                }
            })
            router.put('/:id',async(req,res)=>{
                try {
                    const personid=req.params.id;
                    const updatedata=req.body;
                    const response=await person.findByIdAndUpdate(personid,updatedata,
                        {
                            new:true,
                            runValidators:true,
                        }
                    );
                   if(!response)
                   {
                    return res.status(404).json({error:"person not found"});
                   }
                    console.log("data updated");
                    res.status(200).json(response);
                    
                } catch (err) {
                    console.log("data error");
                    res.status(500).json({error : "internal server error"});
                }
            })
            module.exports=router;