import mongoose from 'mongoosee';
const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        requied:true,
    },
    addressLine1:{
        type:String,
        requied:true,
    },
    addressLine2:{
        type:String,
       
    },
    city:{
        type:String,
        requied:true,
    },
    pincode:{
        type:String,
        requied:true,
    },
    specializedIn:[
        {
            type:String
        } 
    ]

},{timestamps:true});
export const Hospital = mongoose.model('Hospital',hospitalSchema);