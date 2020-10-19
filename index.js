let express = require('express')
let bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 8080;
let apiRoutes = require("./routes")
let mongoose = require('mongoose');

const dbPath = 'mongodb://localhost/chatRoomAPI';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', apiRoutes)

app.listen(port, function() {
    console.log("Running on Port "+ port);
})

mongo.then(() => {
    console.log('Connected');
}, error => {
    console.log(error, 'Error');
})