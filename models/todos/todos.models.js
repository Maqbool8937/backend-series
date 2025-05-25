import mongoose from'mongoose';
const Scheme = new mongoose.Scheme(
    {
   username:{
         type:String,
         required:true,
         unique:true,
         lowercase:true,
   },
   email:{
      type:String,
    required:true,
    unique:true,
    lowercase:true,
   
   },
   createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
   }
},
{timestamps:true},
)
export const Todo = mongoose.mode('Todo',Scheme);