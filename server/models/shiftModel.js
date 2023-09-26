import mongoose from "mongoose";

const { Schema } = mongoose;

const shiftSchema = new Schema({
    numberOfDailyShifts: {
        type: Array,
        required: true,
        minlength: 7
    },
    numberOfHoursPerShift: {
        type: Number,
        required: true,
        minlength: 1
    },
    numberOfWeeklyWorkingEmployees: {
        type: Number,
        required: true,
        minlength: 1
    },
    numberOfEmployeesPerDailyShift: {
        type: Array,
        required: true,
        minlength: 7
    },
});

const ShiftModel = mongoose.model('shifts', shiftSchema);

export default ShiftModel;