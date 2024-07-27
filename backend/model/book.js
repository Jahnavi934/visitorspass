const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    in:{
        type:String,
        require:true
    },
    out:{
        type:String,
        require:true
    },
    purpose:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    veh:{
        type:String,
        require:true
    },
    des:{
        type:String,
        require:true
    },
    dates:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    identity:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('books', bookSchema);
