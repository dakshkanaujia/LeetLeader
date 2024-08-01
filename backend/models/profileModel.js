const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    leetcodeProfile : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        required : false
    },
    country : {
        type : String,
        required : false
    },
    github : {
        type : String,
        required : false
    },
    birthdate : {
        type : String,
        required : false
    },
    linkedin : {
        type : String,
        required : false
    },
    contest : {
        type : Object,
        required : false,
    },
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

module.exports = mongoose.model("Profile", profileSchema)