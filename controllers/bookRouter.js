const express=require("express")
const bookModel = require("../models/bookModel")
const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let books= new bookModel(data)
    let result=await books.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.get("/view",async(req,res)=>{
    let data=await bookModel.find()
    res.json(data)
})

//search
router.post("/search", async(req,res)=>{
    let input = req.body
    let data = await bookModel.find(input)
    res.json(data)
})




module.exports=router