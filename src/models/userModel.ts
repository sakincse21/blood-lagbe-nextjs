import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "userId is required"],
        unique:true
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    district: {
        type: String,
        required: [true, "District is required"],
    },
    upazilla: {
        type: String,
        required: [true, "Upazilla is required"],
    },
    bloodGroup: {
        type: String,
        required: [true, "Blood Group is required"],
    },
    mobile: {
        type: String,
        required: [true, "Mobile is required"],
    },
    lastDonationDate: {
        type: String,
        default: ''
    },
})

export default mongoose.models.donor||mongoose.model("donor",donorSchema,'donors');

