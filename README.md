# cylon-noolite
cylon.js driver/connector for MT1132 module (noolite wireless IoT)

## What is it

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

[noolite](http://www.noo.com.by/) is a set of IoT devices to control power (lights, etc over 433,92 radio). One of it components - [МТ1132 module](http://www.noo.com.by/assets/files/PDF/MT1132.pdf), give ability to transmit commands over UART bus (raspberry, arduino etc). This piece of software can be used to communicate with МТ1132 by sending commands to serial port.

This repository contains the adaptor to integrate cylon with noolite devices. It can be used to send command directly to power switches (controlling lights etc).

## How to Use
```javascript
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

    // same using callbacks
    my.corridor.send('SWITCH', function (err) {
      console.log('command sent');
    });

  }

});

Cylon.start();
```
## Documentation

Please refer to [noolite driver](https://github.com/afoninsky/noolite-uart) for available commands.


## License

Copyright (c) 2015. Licensed under the Apache 2.0 license.
