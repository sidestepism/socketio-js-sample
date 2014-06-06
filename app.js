var io = require('socket.io')(3000);

io.on('connection', function(socket) {

    console.log('hello!');

    socket.on('push', function(data) {
        console.log('pushed: ' + data.buttonType);
    });

    socket.on('disconnect', function() {
        console.log('disconnected');
    });

});
