const mongoose = require("mongoose");

const shortId = require("shortid");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        default: shortId.generate,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp : { type: Number }}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
},
    {timestamps : true}
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;