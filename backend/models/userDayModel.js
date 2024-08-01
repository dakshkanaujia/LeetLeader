const mongoose = require('mongoose')

const userDaySchema = new mongoose.Schema({
    easySolved : {
        type : Number,
        default : 0,
        required : false
    },
    mediumSolved : {
        type : Number,
        default : 0,
        required : false
    },
    hardSolved : {
        type : Number,
        default : 0,
        required : false
    },
    totalSolved : {
        type : Number,
        default : 0,
        required : false
    },
    ranking : {
        type : Number,
        default : 0,
        required : false
    }
})

module.exports = mongoose.model("userDay", userDaySchema)