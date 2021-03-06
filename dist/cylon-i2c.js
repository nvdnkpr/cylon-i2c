/*
 * cylon-gpio
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  require('./blinkm');

  require('./hmc6352');

  module.exports = {
    driver: function(opts) {
      if (opts.name === 'blinkm') {
        return new Cylon.Driver.I2C.BlinkM(opts);
      } else if (opts.name === 'hmc6352') {
        return new Cylon.Driver.I2C.Hmc6352(opts);
      } else {
        return null;
      }
    },
    register: function(robot) {
      Logger.debug("Registering i2c BlinkM driver for " + robot.name);
      robot.registerDriver('cylon-i2c', 'blinkm');
      Logger.debug("Registering i2c HMC6352 driver for " + robot.name);
      return robot.registerDriver('cylon-i2c', 'hmc6352');
    }
  };

}).call(this);
