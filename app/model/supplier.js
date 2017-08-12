var mongoose = require('mongoose');

module.exports = mongoose.model('Supplier',{
    name:{type:String},
    contacts:[
        {
            name:{type:String},
            phone:{type:String},
            position : {type:String}
        }
    ]
});