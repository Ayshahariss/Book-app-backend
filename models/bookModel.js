const mongoose=require("mongoose")
const bookSchema = new mongoose.Schema(

    {
        bookName:String,
        title:String,
        Author:String
    }
)
module.exports=mongoose.model("books",bookSchema)