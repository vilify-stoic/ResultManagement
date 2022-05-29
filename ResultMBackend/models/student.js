const mongoose = require("mongoose")

const { Schema } = mongoose;

const studentSchema = new Schema({
    roll : {
        type : Number,
        unique : true
    },
    name : String,
    dob : {
        type : Date
    },
    score : Number
});

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
    module.exports=LocalStorage;
  }

  

module.exports = mongoose.model("Student",studentSchema)