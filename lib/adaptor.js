'use strict';

var Cylon = require('cylon'),
    Driver = require('noolite');

var Adaptor = module.exports = function Adaptor(cfg) {
  Adaptor.__super__.constructor.apply(this, arguments);

  this.device = new Driver(cfg);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function (callback) {
  this.device.open(callback);
};

Adaptor.prototype.disconnect = function (callback) {
  this.device.serial.close(callback);
};

Adaptor.prototype.send = function () {
  var device = this.device;
  if (typeof arguments[arguments.length - 1] === 'function') {
    return device.send.apply(device, arguments);
  } else {
    return device.sendAsync.apply(device, arguments);
  }
};
