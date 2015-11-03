'use strict';

var Adaptor = require('./lib/adaptor'),
    Driver = require('./lib/driver');

module.exports = {
  adaptors: ['noolite'],
  drivers: ['noolite'],
  adaptor: function(opts) {
    return new Adaptor(opts);
  },
  driver: function(opts) {
    return new Driver(opts);
  }
};