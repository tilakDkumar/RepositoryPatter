const mongoose = require('mongoose')
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/Froms', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.log("error while connecting Mongodb");
    console.log(e);
});


module.exports = { mongoose }
