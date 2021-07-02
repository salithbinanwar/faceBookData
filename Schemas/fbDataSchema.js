const mongoose = require('mongoose');

const fbDataSchema = mongoose.Schema({
    email:{
        type:'string',
        required: true
    },
    password:{
        type:'string',
        required: true
    }
    
})

const FbData = mongoose.model('FbData', fbDataSchema)

module.exports = FbData;