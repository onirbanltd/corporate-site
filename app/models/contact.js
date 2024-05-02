import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
            "Invalid email address"],
    },
    company: {
        type: String,
        required: [true, " Company Name is required."],
        trim: true,
        minLength: [2, "Company Name must be larger than 2 characters"],
        maxLength: [50, "Company Name must be lesser than 50 characters"],
    },
    contactName: {
        type: String,
        required: [true, " Contact Name is required."],
        trim: true,
        minLength: [2, "Contact Name must be larger than 2 characters"],
        maxLength: [50, "Contact Name must be lesser than 50 characters"],
    },
    message: {
        type: String,
        required: [true, "Message is required."],
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact =
    mongoose.models.Contact || mongoose.model("Contact",
        contactSchema);

export default Contact;
