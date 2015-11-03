'use strict';
var Cylon = require('cylon');

Cylon.robot({
  name: 'Ivan',
  connections: {
    module: { adaptor: 'noolite', port: '/dev/ttyAMA0' }
  },
  devices: {
    corridor: { driver: 'noolite', channel: 1 }
  },
  work: function (my) {
    var devices = my.connections.module;

    // send command 'switch the light' to channel #1
    devices.send(1, 'SWITCH').then(function () {
      console.log('command sent');
    });

    // send command 'switch the light' to named device
    my.corridor.send('SWITCH').then(function () {
      console.log('command sent');
    });

  }

});

Cylon.start();
