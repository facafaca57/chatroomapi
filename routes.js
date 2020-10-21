let router = require('express').Router();
var modelController = require('./modelController');
const emailRegex = require('email-regex');

router.get('/', function(req, res) {
    res.json({
        status: 'API Chat Room',
        message: 'Welcome to Chat room \nTo read Documentation API please go to "./api/doc/" page'
    });
});

var validateData = function() {
    return [
      function(req, res, next) {
        if (emailRegex({exact: true}).test(req.body.email)) {
            txt = req.body.msg;
            if (txt.length < 100) {
                next();
            } else {
                res.json({
                    message: "Check if message is not empty, and length < 100"
                });
            }
        } else {
            res.json({
                message: "Enter a valid email"
            });
        }
      }
    ]
};

router.route('/messages/list/:count')
    .get(modelController.index);
router.route('/messages/list/')
    .post(validateData(), modelController.add);
router.route('/messages/single/:msg_id')
    .get(modelController.view);
router.route('/doc/')
    .get(modelController.doc); 

module.exports = router;