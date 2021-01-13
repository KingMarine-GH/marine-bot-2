const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    }, // userId
    department: {
        type: String,
        required: true,
    }, // For bills, it'll be "State"
    url: {
        type: String,
        required: true,
    },
    upload: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("documents", recordSchema);