const mongoose = require('mongoose');

var Reg = mongoose.model('Reg', {
    name: {type: String},
    age: {type:Number},
    email: {type:String},
    password: {type:String}
},'register');

module.exports = {Reg};
