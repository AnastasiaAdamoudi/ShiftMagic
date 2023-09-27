import mongoose from "mongoose";

const { Schema } = mongoose;

const generatedShiftSchema = new Schema({
    employeeAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    dailyShift: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShiftModel',
        required: true,
    },
});


const GeneratedShiftModel = mongoose.model('generatedShifts', generatedShiftSchema);

export default GeneratedShiftModel;