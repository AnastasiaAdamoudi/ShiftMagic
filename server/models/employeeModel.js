import mongoose from "mongoose";

const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    weeklyAvailability: {
        type: Array,
        required: true,
        minlength: 7,
    },
    weeklyHours: {
        type: Number,
        required: true,
        minlength: 0
    },
    weeklyShifts: {
        type: Number,
        required: true,
        minlength: 0
    },
});

const EmployeeModel = mongoose.model('employees', employeeSchema);

export default EmployeeModel;