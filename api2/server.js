const header = require('./config/header');

require('./routes/userRoutes')
header.app.listen("3000",(err,res)=>{
    console.log("server connected")
})