const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb',(err)=>{
    if(!err)
    {
        console.log('MongoDb connection success..');
    }
    else
    {
        console.log('Error in db connection : ' + JSON.stringify(err, undefined, 2));
    }

});

module.exports = mongoose;