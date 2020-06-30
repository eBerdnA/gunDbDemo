import Gun = require('gun/gun');

const gun = new Gun();
gun.get('8899').put({
    uuid: '8899',
    some_prop: 'some value'
});