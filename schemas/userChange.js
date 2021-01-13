const mongoose = require("mongoose");

const userChangeSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    }, // userId
    usernameHistory: {
        type: Object,
        required: true,
    }, // Array of tables with username and date
});

module.exports = mongoose.model("username-history", userChangeSchema);