'use strict';

namespace = require 'node-namespace'

# Needed so that tests don't implode
namespace 'Cylon', ->
  class @Basestar
    constructor: ->

hmc6352 = source("hmc6352")

describe "hmc6352", ->
  driver = new Cylon.Driver.I2C.Hmc6352(name: 'compass', device: {connection: 'connect'})

  it "has parseHeading of 0", ->
    driver.parseHeading([0, 0]).should.equal 0

  it "has parseHeading of 180", ->
    driver.parseHeading([0, 1800]).should.equal 180
