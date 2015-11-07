'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver(cfg) {
  Driver.__super__.constructor.apply(this, arguments);
  this.channel = cfg.channel || 0;
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

Driver.prototype.send = function () {
  // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
  var args = new Array(arguments.length);
  for(var i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  args.unshift(this.channel);
  var device = this.connection.device;
  return device.send.apply(device, args);
};
