import mongoose from 'mongoosee';
const patientSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  diagonedWith:{
   type:String,
   required:true, 
  },
  age:{
    type:Number,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  bloodGroup:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
    enum: ['M','F','O'],
  },
  admittedIn:{
   type:mongoose.Schema.Types.ObjectId,
    ref:'Hospital',
  }


    
},{timestamps:true});
export const Patient = mongoose.model('Patient',patientSchema);