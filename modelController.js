Model = require('./modelSchema');

exports.index = function (req, res) {
    Model.get(function (err, model) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Messages Successfully!",
            data: model.slice(req.params.count*10, req.params.count*10 + 10)
        });
    });
};

exports.add = function (req, res) {
    var model = new Model();
    model.email = req.body.email
    model.msg = req.body.msg;

    model.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "Message sent!",
            data: model
        });
    });
};

exports.view = function (req, res) {
    Model.findById(req.params.msg_id, function (err, model) {
        if (err)
            res.send(err);
        res.json({
            message: 'Message Details',
            data: model
        });
    });
};