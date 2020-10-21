let express = require('express')
let bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 8080;
let apiRoutes = require("./routes")
let mongoose = require('mongoose');

//let uri = "mongodb+srv://admin:admin@cluster0.lz0ec.mongodb.net/chatRoomAPI?retryWrites=true&w=majority"; //for local test

const dbPath = process.env.MONGODB_URI || 'mongodb://localhost/chat-room-api-andrei';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.redirect('/api')
})
app.use('/api', apiRoutes)

app.listen(port, function() {
    console.log("Running on Port "+ port);
})

mongo.then(() => {
    console.log('Connected');
}, error => {
    console.log(error, 'Error');
})