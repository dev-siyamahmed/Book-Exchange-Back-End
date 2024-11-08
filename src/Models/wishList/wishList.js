const mongoose = require("mongoose")
const wishListSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    cover_image: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },

    writer: {
        type: String,
        require: true
    },
})

const wishList = mongoose.model("wishList" , wishListSchema);
module.exports = wishList