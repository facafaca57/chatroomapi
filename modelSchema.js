var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    create_date:{
        type: String
    },
    update_date:{ 
        type:String
    }
});

var Model = module.exports = mongoose.model('model', modelSchema);

module.exports.get = function (callback, limit) {
    Model.find(callback).limit(limit); 
}