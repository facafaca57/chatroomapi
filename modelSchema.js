var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
});

var Model = module.exports = mongoose.model('model', modelSchema);

module.exports.get = function (callback, limit) {
    Model.find(callback).limit(limit); 
}