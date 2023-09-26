import mongoose from "mongoose";

const { Schema } = mongoose;

const generatedShiftSchema = new Schema({
    day: {
        type: String,
        required: true,
    },
    shift: {
        type: String,
        required: true,
    },
    employeeAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', // Reference the Employee model to get the employee assigned to the shift
        required: true,
    },
});

const GeneratedShiftModel = mongoose.model('generatedShifts', generatedShiftSchema);

export default GeneratedShiftModel;