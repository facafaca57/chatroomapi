Model = require('./modelSchema');

let date_ob = new Date();
function dateNow(){
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return hours + "-" + minutes + "-" + seconds + " " + date + ":" + month + ":" + year; 
}

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
    model.email = req.body.email;
    model.msg = req.body.msg;
    model.create_date = dateNow();
    model.update_date = "";

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

exports.doc = function (req, res) {
    res.sendFile(process.env.PWD + "/docs.pdf" );
};