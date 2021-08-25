const header = require('../config/header');
const userCtrl = require('../controllers/userControleer')


const ctrl = new userCtrl();

header.app.post('/register',ctrl.createUser);


exports.app = this.app;