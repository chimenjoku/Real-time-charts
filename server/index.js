// const app = require('express')();
// const io = require('socket.io')();
// const http = require('http').Server(app);
var express = require('express');
var app = express();
var io = require('socket.io').listen(server);
const pressure = require('./pressure');
const cors = require('cors');

const whitelist = ['http://localhost:4200'];
const corsOptions = {
    credentials: true, // This is important.
    origin: (origin, callback) => {
        if (whitelist.includes(origin))
            return callback(null, true)

        callback(new Error('Not allowed by CORS'));
    }
}

app.use(cors(corsOptions));


const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/pressure', (req, res) => {
    res.send(pressure.pressureData);
});

setInterval(function () {
    pressure.updatePressure();
    io.sockets.emit('pressure', pressure.pressureData[0]);
}, 2000);

io.set('origins', 'http://localhost:4200');

io.on('connection', function (socket) {
    console.log('a user connected');
});

var server = app.listen(port, () => {
    console.log(`Listening on *:${port}`);
});