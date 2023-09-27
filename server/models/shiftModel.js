import mongoose from "mongoose";

const { Schema } = mongoose;

const shiftSchema = new Schema({
    dayOfWeek: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    startTime: {
        type: Number,
        required: true,
        minlength: 1
    },
    endTime: {
        type: Number,
        required: true,
        minlength: 1
    },
    numberOfHoursPerShift: {
        type: Number,
        required: true,
        minlength: 1
    },
    numberOfEmployeesPerShift: {
        type: Number,
        required: true,
        minlength: 1
    },
});

const ShiftModel = mongoose.model('shifts', shiftSchema);

export default ShiftModel;