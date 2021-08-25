const header = require('../config/header')
const userctrl = require('../controller/userCtrl')
const ctrl = new userctrl();


header.app.post('/register', ctrl.createUser);

header.app.post('/getUser',ctrl.getUser)

header.app.post('/updateuser',ctrl.updateUser)

exports.app = this.app;
