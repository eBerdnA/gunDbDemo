"use strict";
exports.__esModule = true;
var Gun = require("gun/gun");
var gun = new Gun();
gun.get('8899').put({
    uuid: '8899',
    some_prop: 'some value'
});
