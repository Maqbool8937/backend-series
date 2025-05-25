import mongoose from 'mongoosee';
const medicalRecordSchema = new mongoose.Schema({
    
},{timestamps:true});
export const MedicalRedcord = mongoose.model('MedicalRecord',medicalRecordSchema);